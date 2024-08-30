import { PropsWithChildren } from "react";

import TopBarClass from "~/styles/topbar.ts";

export default function TopBar(
  { children }: PropsWithChildren,
) {
  return (
    <TopBarClass>
      {children}
    </TopBarClass>
  );
}
