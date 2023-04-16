import { exec } from "child_process";
import { promisify } from "util";

export interface Change {
    type: 'Added' | 'Deleted' | 'Modified';
    file: string;
}

export interface Commit {
    hash: string;
    author: string;
    date: string;
    comment: string;
    changes: Change[];
}

export default async function GitChanges() {
    const { stdout } = await promisify(exec)('git log --name-status');

    const commits: Commit[] = [];

    stdout.split('\n').forEach((line) => {
        const matchCommit = line.match(/^commit (\w+)$/);
        if (matchCommit) {
            // Start of a new commit
            const newCommit: Commit = {
                hash: matchCommit[1],
                author: '',
                date: '',
                comment: '',
                changes: [],
            };
            commits.push(newCommit);
        } else {
            const currentCommit = commits[commits.length - 1];

            const matchAuthor = line.match(/^Author: (.*)$/);
            if (matchAuthor) {
                currentCommit.author = matchAuthor[1];
            }

            const matchDate = line.match(/^Date: (.*)$/);
            if (matchDate) {
                currentCommit.date = matchDate[1];
            }

            const matchComment = line.match(/^        (.*)$/);
            if (matchComment) {
                currentCommit.comment += matchComment[1] + '\n';
            }

            const matchChange = line.match(/^([AMD])\s+(.*)$/);
            if (matchChange) {
                currentCommit.changes.push({
                    type: matchChange[1] === 'A' ? 'Added' : matchChange[1] === 'D' ? 'Deleted' : 'Modified',
                    file: matchChange[2],
                });
            }
        }
    });

    return (
        <div>
            {commits.map((commit) => (
                <div key={commit.hash}> 
                    <span>Date:    {commit.date}</span> <br/>
                    <span>Comment: {commit.comment}</span>
                    <ul style={{margin:0}}>
                        {commit.changes.map((change, index) => (
                            <li key={index}>
                                {change.type} {change.file}
                            </li>
                        ))}
                    </ul>
                    <br/>
                </div>
            ))}
        </div>
    );
}
