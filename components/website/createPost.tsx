'use client'; 

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreatePost({ id }: {id?: number}) {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [isLoading, setIsLoading] = useState(false); // added loading state

  const router = useRouter();

  const create = async() => {
    setIsLoading(true); // set loading state to true

    try {
      const response = await fetch(`http://localhost:3000/api/v1/comments`, {
        method: 'POST',
        headers: {
          'Comment-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          comment,
          documentId: id,
        }),
      });

      if (!response.ok) { // throw error if response is not ok
        throw new Error('Fetch failed');
      }

      setName('');
      setComment('');

      //router.refresh();

      console.log(response);

    } catch (error) {
      console.error(error); // log error to console
      setIsLoading(false); // set loading state to false
    }
  }

  return (
    <form onSubmit={create}>
      <h3>Support PoopMaster!</h3>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button type="submit" disabled={isLoading}> {/* disable button while loading */}
        {isLoading ? 'Loading...' : 'Create note'} {/* display loading text while loading */}
      </button>
    </form>
  );
}
