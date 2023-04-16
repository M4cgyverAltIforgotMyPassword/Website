import { Metadata } from "next";

import Providers from "@/components/redux/provider";
import TitleSet from "@/components/website/titleSet";
import V86 from "@/components/v86/v86";
import V86Component from "@/components/v86/v86";

export const metadata: Metadata = {
    title:        'M4cgyver\'s StartupOS',
    description:  'Here is an operating system I made completly from scratch in Intel x86 Assembly, all the way down to the instruction set. Check it out!',
  
    openGraph: {
        title:        'M4cgyver\'s StartupOS',
        description:  'Here is an operating system I made completly from scratch in Intel x86 Assembly, all the way down to the instruction set. Check it out!',
        url:          'https://m4cgyver.com/projects/startupos',
        locale:       'en-US',
        type:         'website',
  }
};

const title = <>
    <h1>{metadata.title?.toString()}</h1>
    <p>{metadata.description?.toString()}</p>
</>;

export default function StartupOS() { 
    return (
        <main>
          <Providers>
            <TitleSet>
              {title}
            </TitleSet>
          </Providers>

          <div>
            <V86Component 
              biosUrl     = "/static/projects/v86/bios/seabios.bin" 
              vgaBiosUrl  = "/static/projects/v86/bios/vgabios.bin"
            />
          </div>

        </main>
    )
  }    