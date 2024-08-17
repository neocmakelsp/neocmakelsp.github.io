import TopMainAreaCSS, {
  InlineLinkCSS,
  TopMainSmallTitleCSS,
  TopMainTitleCSS,
  TopTextCSS,
} from "~/styles/topmainarea.ts";
import { PropsWithChildren } from "react";

export default function TopMainArea(
  { children }: PropsWithChildren,
) {
  return (
    <section id="main" class={TopMainAreaCSS}>
      {children}
    </section>
  );
}

export function TopText(
  { children }: PropsWithChildren,
) {
  return (
    <div class={TopTextCSS}>
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
    <p class={TopMainSmallTitleCSS}>
      {children}
    </p>
  );
}

export type InlineLinkProps = {
  link: string;
  tips: string;
};

export function DescriptionInlineLink(
  { tips, link, children }: PropsWithChildren<InlineLinkProps>,
) {
  return (
    <span class={InlineLinkCSS}>
      <a href={link}>
        {children}
      </a>
      <span class="tooltiptext">{tips}</span>
    </span>
  );
}
