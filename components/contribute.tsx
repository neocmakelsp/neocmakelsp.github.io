import { ContributeMainCSS, ContributeTitleCSS } from "~/styles/contribute.ts";

import { PropsWithChildren } from "react";
export default function ContributeMain(
  { children }: PropsWithChildren,
) {
  return (
    <section id="contribute" class={ContributeMainCSS}>
      {children}
    </section>
  );
}
export function ContributeTitle(
  { children }: PropsWithChildren,
) {
  return (
    <h1 class={ContributeTitleCSS}>
      {children}
    </h1>
  );
}
