import { PropsWithChildren } from "react";

import TopBar from "~/styles/topbar.ts";

export interface HomeProps {
  label: string;
}

export function Home(
  { children, label }: PropsWithChildren<HomeProps>,
) {
  return (
    <div>
      <div
        class={TopBar}
      >
        <a class="active" href="#home">{label}</a>
        <a href="#News">News</a>
      </div>
      {children}
    </div>
  );
}
