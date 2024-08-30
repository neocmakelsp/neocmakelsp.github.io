import { PropsWithChildren } from "react";
import { InlineLinkCSS } from "~/styles/common.ts";

export type InlineLinkProps = {
  link: string;
  tips: string;
};

export function DescriptionInlineLink(
  { tips, link, children }: PropsWithChildren<InlineLinkProps>,
) {
  return (
    <InlineLinkCSS>
      <a href={link}>
        {children}
      </a>
      <span class="tooltiptext">{tips}</span>
    </InlineLinkCSS>
  );
}
