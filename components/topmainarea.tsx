import TopMainAreaCSS, {
  TopMainSmallTitleCSS,
  TopMainTitleCSS,
} from "~/styles/topmainarea.ts";
import { PropsWithChildren } from "react";

export default function TopMainArea(
  { children }: PropsWithChildren,
) {
  return (
    <div
      class={TopMainAreaCSS}
    >
      {children}
    </div>
  );
}

export function TopMainAreaTitle(
  { children }: PropsWithChildren,
) {
  return (
    <h1 class={TopMainTitleCSS}>
      {children}
    </h1>
  );
}

export function TopMainAreaSmallTitle(
  { children }: PropsWithChildren,
) {
  return (
    <h3 class={TopMainSmallTitleCSS}>
      {children}
    </h3>
  );
}
