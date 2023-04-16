import { Comments } from '@prisma/client';
import { Metadata } from 'next';

import styles from './page.module.css'
import CreatePost from "@/components/website/createPost"; 
import Providers from '@/components/redux/provider';
import TitleSet from '@/components/website/titleSet';
import { parseISO, format } from 'date-fns'; 
import Image from 'next/image';


//TODO: remap this to the Homepage metadata
export const metadata: Metadata = {
  title:        '#FreeCookie Political Movement!',
  description:  'Our friend Cookie, also known as David, is in jail for allegedly stealing copper wire. While it\'s a mistake, I don\'t think he should be in jail for it. Getting him back into our friend group is important because he\'s a valuable member of our Stardew Valley lobby, skilled at CSGO2, and a funny guy.',
  
  openGraph: {
    title:        '#FreeCookie Political Movement!',
    description:  'Our friend Cookie, also known as David, is in jail for allegedly stealing copper wire. While it\'s a mistake, I don\'t think he should be in jail for it. Getting him back into our friend group is important because he\'s a valuable member of our Stardew Valley lobby, skilled at CSGO2, and a funny guy.',
      url:          'https://m4cgyver.com/friends/cookie',
      locale:       'en-US',
      type:         'website',
  }
};

async function getPosts() { 
  const url = `${process.env.BASE_URL}/api/v1/comments?documentId=1`;
  console.log("URL", url.toString());
  const res = await fetch(url, { cache: 'no-store' })
  return res.json();
}

const title = <>
  <h1>{metadata.title?.toString()}</h1>
  <p>{metadata.description?.toString()}</p>
</>;

export default async function Cookie() { 
  const youtubeRegex  = new RegExp(/^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/);
  const imageRegex    = new RegExp(/^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|png|gif)$/);

  const posts =  await getPosts(); 

  console.log("POSTS", posts);

  return (
    <>
      <Providers>
        <TitleSet>
          {title}
        </TitleSet>
      </Providers>

      <main className={styles.cookie}>      
          <div style={{overflow:"auto"}}>
            <h1 style={{float:"left"}}>Help, Our friend needs your help!</h1>
            <h1 style={{float:"right"}}>#FreeCookie</h1> 
          </div> 
          <p>Jontavious higgle bottom, otherwise known as David is apperently in fucking jail or something because he tried to steal copper wire. Dont get me wrong this is incredibly fucking retarded but I dont think he should be in jail, yall acting as if he robbed a gass station or something. Its incredibly important that we get him back into our friend group for the main reasons listed down below:</p>
          
          <h2>Hes in our Stardew Valley lobby</h2>
          <p>Ill admit I fucked up Gusses Stardew character in order to get other people to join. In fairness though Casmier didnt toggle the option for other players to join so theres enough blame to go around :D</p>
          <p>If we loose cookie that is a lot of slave labor going out the window on Gusses account. Since I bew up a lot of shit with a megabomb and we need to make up that profit</p>
  
          <h2>Hes god at CSGO2</h2>
          <p>Well, imagine a guy who always has a funny one-liner ready, even in the most intense moments of a Counter-Strike: Global Offensive (CSGO) match. Hes quick with a joke and always keeps his teammates laughing and relaxed. But when it comes to gameplay, hes a force to be reckoned with. He seems to have an uncanny ability to predict where the enemy is hiding and always manages to pull off clutch plays that turn the tide of the match in his teams favor. In fact, hes so good that some opponents might even accuse him of cheating! But despite any accusations, he remains cool and collected, continuing to make incredible plays while cracking jokes and keeping his teams spirits high.</p>
  
          <h2>Hes a funny guy</h2>
          <p>Ive known David for about half a decade now and I can say for certain he is a great guy. A little bit retarted but hes a great guy. I have no complaints about metting him or knowing him. Im sure that if the $(COUNTY) understands that the economy is going to shit and inflation has really hit hard on the perc4s he can be released without question.</p>

          <br/>

          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <CreatePost id={1}/>
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
                <div key={post.id} className={styles.card} >
                  <time dateTime={post.createdAt.toString()}>
                    {format(parseISO(post.createdAt.toString()), "M/d/y h:mm a")}
                  </time>
                  <h1>{post.name}</h1>
                  <p>{elements}</p>
                </div>
              );
            })}


            <div className={styles.card}>
              <h1>Hello</h1>
              <p>Your looking for something arnt you</p>
            </div>

            <div className={styles.card}>
              <h1>Cookie Rn</h1>
              <video width="100%" controls>
                <source src="/static/videos/romantical.mp4" type="video/mp4" /> 
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

         <span className={styles.clearfix} />
      </main>
    </>
  )
}    