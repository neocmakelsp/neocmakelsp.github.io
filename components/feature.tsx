import FeatureMainCSS, {
  FeatureCardCSS,
  FeatureCardTitleCSS,
  FeatureDescriptionCSS,
  FeatureGridCSS,
  FeatureTitleCSS,
} from "~/styles/feature.ts";

import { PropsWithChildren } from "preact/compat";
export default function FeatureMain(
  { children }: PropsWithChildren,
) {
  return (
    <FeatureMainCSS id="feature">
      {children}
    </FeatureMainCSS>
  );
}

export function FeatureAreaTitle(
  { children }: PropsWithChildren,
) {
  return (
    <FeatureTitleCSS>
      {children}
    </FeatureTitleCSS>
  );
}

export function FeatureDisplayGrid(
  { children }: PropsWithChildren,
) {
  return (
    <FeatureGridCSS>
      {children}
    </FeatureGridCSS>
  );
}
function CardTitle(
  { children }: PropsWithChildren,
) {
  return (
    <FeatureCardTitleCSS>
      {children}
    </FeatureCardTitleCSS>
  );
}

export type FeatureCardProps = {
  title: string;
};

export function FeatureCard(
  { title, children }: PropsWithChildren<FeatureCardProps>,
) {
  return (
    <FeatureCardCSS>
      <CardTitle>
        {title}
      </CardTitle>
      {children}
    </FeatureCardCSS>
  );
}
export function FeatureCardDescription(
  { children }: PropsWithChildren,
) {
  return (
    <FeatureDescriptionCSS>
      {children}
    </FeatureDescriptionCSS>
  );
}
