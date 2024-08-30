import {
  InstallBodyCSS,
  InstallMainCSS,
  InstallTitleCSS,
} from "~/styles/install.ts";

import { PropsWithChildren } from "react";
export default function InstallMain(
  { children }: PropsWithChildren,
) {
  return (
    <InstallMainCSS id="install">
      {children}
    </InstallMainCSS>
  );
}

export function InstallAreaTitle(
  { children }: PropsWithChildren,
) {
  return (
    <InstallTitleCSS>
      {children}
    </InstallTitleCSS>
  );
}

export function InstallBody(
  { children }: PropsWithChildren,
) {
  return (
    <InstallBodyCSS>
      {children}
    </InstallBodyCSS>
  );
}
