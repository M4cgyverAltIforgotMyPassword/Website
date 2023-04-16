'use client';

import Providers from "@/components/redux/provider";
import TitleSet from "@/components/website/titleSet";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <Providers>
        <TitleSet>
          <h1>Something went wrong!</h1>
          <p>Ill fix it later just spam the retry button</p>
        </TitleSet>
      </Providers>

      <h2>{error.name}: {error.message}</h2>
      <h3>{error.stack}</h3>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
