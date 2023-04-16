import TitleSet from '@/components/website/titleSet';
import type { Metadata } from 'next'; 
import Providers from "@/components/redux/provider";
import { store } from '@/components/redux';
import { setTitle } from '@/components/website/titleSlice';

export const metadata: Metadata = {
  title:        'General Entertainment',
  description:  'Here are some games or movies Ive made over the years, feel free to check them out!',
  
  openGraph: {
    title:        'General Entertainment',
    description:  'Here are some games or movies Ive made over the years, feel free to check them out!',
    url:          'https://m4cgyver.com/games',
    locale:       'en-US',
    type:         'website',
  }
};

const title = <>
  <h1>{metadata.title?.toString()}</h1>
  <p>{metadata.description?.toString()}</p>
</>;

export default function Games() { 
    return (
      <>
        <Providers>
          <TitleSet>
            {title}
          </TitleSet>
        </Providers>
      </>
    )
  }    