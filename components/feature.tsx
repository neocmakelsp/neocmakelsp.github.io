import FeatureMainCSS, {
  FeatureCardCSS,
  FeatureCardTitleCSS,
  FeatureDescriptionCSS,
  FeatureGridCSS,
  FeatureTitleCSS,
} from "~/styles/feature.ts";

import { PropsWithChildren } from "react";
export default function FeatureMain(
  { children }: PropsWithChildren,
) {
  return (
    <section id="feature" class={FeatureMainCSS}>
      {children}
    </section>
  );
}

export function FeatureAreaTitle(
  { children }: PropsWithChildren,
) {
  return (
    <h1 class={FeatureTitleCSS}>
      {children}
    </h1>
  );
}

export function FeatureDisplayGrid(
  { children }: PropsWithChildren,
) {
  return (
    <div class={FeatureGridCSS}>
      {children}
    </div>
  );
}
function CardTitle(
  { children }: PropsWithChildren,
) {
  return (
    <h1 class={FeatureCardTitleCSS}>
      {children}
    </h1>
  );
}

export type FeatureCardProps = {
  title: string;
};

export function FeatureCard(
  { title, children }: PropsWithChildren<FeatureCardProps>,
) {
  return (
    <div class={FeatureCardCSS}>
      <CardTitle>
        {title}
      </CardTitle>
      {children}
    </div>
  );
}
export function FeatureCardDescription(
  { children }: PropsWithChildren,
) {
  return (
    <p class={FeatureDescriptionCSS}>
      {children}
    </p>
  );
}
