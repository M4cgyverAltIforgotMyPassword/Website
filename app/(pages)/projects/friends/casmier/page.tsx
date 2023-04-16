import Providers from '@/components/redux/provider';
import styles from './page.module.css'
import TitleSet from '@/components/website/titleSet';
import { Metadata } from 'next';
import Image from 'next/image';
import { relative } from 'path';
import CreatePost from '@/components/website/createPost';

import { parseISO, format } from 'date-fns';  
import { Comments } from '@prisma/client';
import Overlay from '@/components/website/overlay';

//TODO: remap this to the Homepage metadata
export const metadata: Metadata = {
  title:        'Casmier has gone completly awol!',
  description:  'Casmier lastname gargincy has been groomed by a fed for at least two weeks now! It is with deep concern that we need to get him back onto Stardew and send him off to the mines where he belongs.',
  
  openGraph: {
    title:        'Casmier has gone completly awol!',
    description:  'Casmier lastname gargincy has been groomed by a fed for at least two weeks now! It is with deep concern that we need to get him back onto Stardew and send him off to the mines where he belongs.',
      url:          'https://m4cgyver.com/friends/cookie',
      locale:       'en-US',
      type:         'website',
  }
};

async function getPosts() { 
  const res = await fetch(`${process.env.BASE_URL}/api/v1/comments?documentId=2`, { cache: 'no-store' })
  return res.json();
}

const title = <>
  <h1>{metadata.title?.toString()}</h1>
  <p>{metadata.description?.toString()}</p>
</>;

export default async function Casmier() { 
  const youtubeRegex  = new RegExp(/^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/);
  const imageRegex    = new RegExp(/^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|png|gif)$/);

  const posts =  await getPosts(); 

  return (
    <>
      <Providers>
        <TitleSet>
          {title}
        </TitleSet>
      </Providers>
      <main className={styles.casmier}>
        <div style={{ position: "relative" }}>
          <Overlay>
            <span style={{textAlign:'center'}}>
              We ran though that game like a fucking 10$ whore though a frat house <br/> 
              Unfortunalty we have ran out of shit to do in the game. <br/> 
              If you have recomendations on mods please dm casmier @  308 Negra Arroyo Lane Albuquerque New Mexico 87104. <br/> 
              <Image src="/static/images/crying-sad.gif" width={250} height={250} alt="mald"></Image>
            </span>
          </Overlay>

          <Image src="/static/images/stardew2.webp" width={1200} height={600} alt="stardew" style={{ width: "100%", height: "auto" }} />
          <Image src="/static/images/IfIpVKM.png" width={1200} height={600} alt="soyjack" style={{ position: "absolute", top: "50%", left: 0, right: 0, width:"100%", height: "75%", transform: "translateY(-34.4%)" }} />

          <div style={{ position: "absolute", top: "10%", left:"10%" }}>
            <Image src="/static/images/Screenshot_20230409_214634.png" width={75} height={50} alt="stardew" style={{float:"left"}}/>
            <span style={{color:"white"}}> ← His ass is possibly a furry! <br/>Cute icon tho</span>
          </div>

          <div style={{ position: "absolute", top: "10%", left:"90%" }}>
            <span style={{color:"red"}}>Warning!</span>
            <span style={{color:"white"}}>We just recieved confirmation that he is possibly Polish!</span>
          </div>


          <div style={{ position: "absolute", top: "70%", left:"32%", width:"40%" }}>
            <span style={{color:"red", textShadow: "black 0px 0px 2px" }}>Casmiers girlfriend, whose name remains unknown, has become the center of his world. He spends most of his time with her, neglecting his other interests and hobbies. One of his favorite pastimes used to be playing Stardew Mines, a popular video game where players explore a mining cave and fight monsters. But lately, he hasnt been playing much of it, as he would rather spend his free time with his girlfriend.</span>
          </div>

          <span className={styles.clearfix} />
        </div>

        <div style={{backgroundImage:"url(/static/images/43389f93a7876ed.png)"}}>
          <div>
            <h1 style={{margin: "0", padding:"0"}}>Known Artworks:</h1>
            <h2 style={{margin: "0", padding:"0", fontSize: "medium"}}>Pretty good shit good shit not gonna lie!</h2> 
          </div>

          <Image src="/static/images/1679456597836.png" width={250} height={175} alt="meatboy" style={{float:"left", border:"1px solid black"}}/>
          <Image src="/static/images/pizza.png" width={250} height={175} alt="pizza" style={{float:"left", border:"1px solid black"}}/>

          <span className={styles.clearfix} />
        </div>

        <div style={{backgroundImage:"url(/static/images/paper.gif)", padding: 4, width:"100%", marginTop: 2}}>
          <div className={styles.card}>
            <CreatePost id={2}/>
          </div>

          {posts.map((post: Comments) => {
              const words = post.comment.split(/[ \n]+/); 

              const elements = words.map((word, index) => {
                const isYoutubeLink = youtubeRegex.test(word);
                const isImageLink = imageRegex.test(word);

                if (isYoutubeLink) {
                  const videoId = word.split("v=")[1];
                  const embedUrl = `https://www.youtube.com/embed/${videoId}`;
                  return (
                    <div key={index}>
                      <iframe
                        style={{ width: "100%" }}
                        src={embedUrl}
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        title="YouTube video player"
                      />
                    </div>
                  );
                }

                if (isImageLink) {
                  return (
                    <div key={index}>
                      <Image src={word} alt="Image" width={100} height={150} style={{ width: "100%", height: "auto" }} />
                    </div>
                  );
                }

                return <span key={index}>{word} </span>;
              });

              return (
                <div key={post.id} className={styles.card}>
                  <time dateTime={post.createdAt.toString()}>
                    {format(parseISO(post.createdAt.toString()), "M/d/y h:mm a")}
                  </time>
                  <h1>{post.name}</h1>
                  <p>{elements}</p>
                </div>
              );
            })}

          <span className={styles.clearfix} />
        </div>

      </main>
    </>
    )
  }    