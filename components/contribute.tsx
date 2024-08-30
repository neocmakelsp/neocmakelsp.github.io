import { ContributeMainCSS, ContributeTitleCSS } from "~/styles/contribute.ts";

import { PropsWithChildren } from "react";


export default function ContributeMain(
  { children }: PropsWithChildren,
) {
  return (
    <ContributeMainCSS id="contribute">
      {children}
    </ContributeMainCSS>
  );
}
export function ContributeTitle(
  { children }: PropsWithChildren,
) {
  return (
    <ContributeTitleCSS>
      {children}
    </ContributeTitleCSS>
  );
}
