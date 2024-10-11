import { PropsWithChildren } from "react";

import TopBarClass from "~/styles/topbar.ts";

export function MainTopBar(
  { children }: PropsWithChildren,
) {
  return (
    <TopBarClass autohide={true}>
      {children}
    </TopBarClass>
  );
}

export function DocTopBar(
  { children }: PropsWithChildren,
) {
  return (
    <TopBarClass isdark={true}>
      {children}
    </TopBarClass>
  );
}
