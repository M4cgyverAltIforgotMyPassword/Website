import { Metadata } from "next"; 

import Homepage from "@/app/(pages)/home/page"; 

//TODO: remap this to the Homepage metadata
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

  
export default function Indexpage() {
    return <Homepage /> ;
}    