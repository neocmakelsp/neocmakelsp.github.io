import { InstallBodyCSS, InstallMainCSS, InstallTitleCSS } from "~/styles/install.ts";

import { PropsWithChildren } from "react";
export default function InstallMain(
  { children }: PropsWithChildren,
) {
  return (
    <section id="install" class={InstallMainCSS}>
      {children}
    </section>
  );
}

export function InstallAreaTitle(
  { children }: PropsWithChildren,
) {
  return (
    <h1 class={InstallTitleCSS}>
      {children}
    </h1>
  );
}

export function InstallBody(
  { children }: PropsWithChildren,
) {
  return (
    <div class={InstallBodyCSS}>
      {children}
    </div>
  );
}
