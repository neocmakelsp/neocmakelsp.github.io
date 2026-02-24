import TopMainAreaCSS, {
  TopMainSmallTitleCSS,
  TopMainTitleCSS,
  TopTextCSS,
} from "~/styles/topmainarea.ts";
import { PropsWithChildren } from "preact/compat";

export default function TopMainArea(
  { children }: PropsWithChildren,
) {
  return (
    <TopMainAreaCSS id="main">
      {children}
    </TopMainAreaCSS>
  );
}

export function TopText(
  { children }: PropsWithChildren,
) {
  return (
    <TopTextCSS>
      {children}
    </TopTextCSS>
  );
}

export function TopMainAreaTitle(
  { children }: PropsWithChildren,
) {
  return (
    <TopMainTitleCSS>
      {children}
    </TopMainTitleCSS>
  );
}

export function TopMainAreaSmallTitle(
  { children }: PropsWithChildren,
) {
  return (
    <TopMainSmallTitleCSS>
      {children}
    </TopMainSmallTitleCSS>
  );
}
