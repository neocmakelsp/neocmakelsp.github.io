import { PropsWithChildren } from "react";

import TopBarClass from "~/styles/topbar.ts";

export function MainTopBar(
  { children }: PropsWithChildren,
) {
  return (
    <TopBarClass autohide>
      {children}
    </TopBarClass>
  );
}

export function DocTopBar(
  { children }: PropsWithChildren,
) {
  return (
    <TopBarClass isdark>
      {children}
    </TopBarClass>
  );
}
