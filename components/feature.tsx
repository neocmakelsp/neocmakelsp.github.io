import FeatureMainCSS, { FutureTitleCSS } from "~/styles/feature.ts";

import { PropsWithChildren } from "react";
export default function FetureMainA(
  { children }: PropsWithChildren,
) {
  return (
    <section id="feature" class={FeatureMainCSS}>
      {children}
    </section>
  );
}

export function FeatureAreaTitle(
  { children }: PropsWithChildren,
) {
  return (
    <h1 class={FutureTitleCSS}>
      {children}
    </h1>
  );
}
