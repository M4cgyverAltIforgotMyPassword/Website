import type { Metadata } from 'next';
import styles from "@/app/(pages)/home/page.module.css";
import Image from "next/image";
import Link from "next/link";  
import Providers from "@/components/redux/provider";
import TitleSet from '@/components/website/titleSet';
import { store } from '@/components/redux';
import { setTitle } from '@/components/website/titleSlice';

export const metadata: Metadata = {
  title:        'M4cgyvers Repurposed Mining Rig. ',
  description:  'Welcome to my website/resume (depending on whos reading). Written in NextJS 13 and NodeJs!',
  
  openGraph: {
    title:        'M4cgyvers Repurposed Mining Rig. ',
    description:  'Welcome to my (m4cgyver) website / resume (depending on whos reading). Written in NextJS 13 and NodeJs!',
    url:          'https://m4cgyver.com',
    locale:       'en-US',
    type:         'website',
  }
};

const title = <>
  <h1>{metadata.title?.toString()}</h1>
  <p>{metadata.description?.toString()}</p>
</>;

export default function Homepage() { 
    return (
      <>
        <Providers>
          <TitleSet>
            {title}
          </TitleSet>
        </Providers>

        <main className={styles.homepage}>
          

          <p hidden> I put this shit in chatgtp lmao</p> 

          <div>
            <div style={{height:"8px"}} />
            <h1>Hello World!</h1> 
            <br/>
            <p style={{marginTop:"-16px"}}>My name is Logan Rios, a California native with a passion for computer technology. I attended BOHS for high school, where I honed my skills in computer science. Currently, Im pursuing a degree in computer science and technology at Grand Canyon University in Arizona, where Im constantly exploring and expanding my knowledge in this field, though I always prefer self-taught methods such as YouTube videos and blog websites. My favorite form of learning is though creating fun projects that can be repurposed and reused in the future whenever needed. </p>
          </div>
  
          <div>
            <div style={{height:"32px"}} />
            <Link href="/static/images/PXL_20230322_080050245.jpg" target={"_blank"}> 
              <Image src="/static/images/PXL_20230322_080050245.jpg" alt="stupid mining rig" width={1920} height={1080} style={{marginTop: 2, float:"left", marginRight: 4, width:"calc(min(1.5vw, 1.7vh)*16)", height:"calc(min(1.5vw, 1.7vh)*9)"}}/> 
            </Link>
            <p>In my free time, I enjoy creating unique and innovative hardware gimmicks, such as my gameboy that doubles as a keyfob or use a old mining rig to host a website and train AI models ready for everyone and anyone. I also have a strong interest in software development and enjoy pushing the boundaries of whats possible with obscure concepts and designs. One of my biggest software projects was creating a complete x86 opperating system (it booted and ran programs, thats about it. Could never figure out how to program interrupts so I just had a <span style={{fontStyle:"italic"}}>jmp</span> table). I always have a love for old <span style={{fontStyle:"italic"}}>retro</span> tech. If its games or just old computers parts I always love to make use of them. For example; Im using a stack of Floppy Disks to prop up my monitor because it fucking broke on the way to colledge :D. My passion for technology has led me on a journey of exploration and creativity, and Im excited to see where it takes me in the future.</p>
          </div>

          <div>
            <div style={{height:"24px"}} />
            <p>Honestly thats about it. Ill be posting blog updates on locations, tips, projects, and games. Anyone else that posts more than that on the internet has really bad opsec, bad with personal data, or has pronouns in their bio.</p>
          </div>

        </main>
      </>
    )
  }    