import Providers from '@/components/redux/provider';
import TitleSet from '@/components/website/titleSet';
import type { Metadata } from 'next'; 

export const metadata: Metadata = {
    title:        'Projects and Workloads',
    description:  'Here are some of the cool shit Im working on. Some of them may or may not be complete!',
  
    openGraph: {
      title:        'Projects and Workloads',
      description:  'Here are some of the cool shit Im working on. Some of them may or may not be complete!',
      url:          'https://m4cgyver.com/projects',
      locale:       'en-US',
      type:         'website',
  }
};

const title = <>
    <h1>{metadata.title?.toString()}</h1>
    <p>{metadata.description?.toString()}</p>
</>;

export default function Projects() { 
    return (
        <main>
          <Providers>
            <TitleSet>
              {title}
            </TitleSet>
          </Providers>
        </main>
    )
  }    