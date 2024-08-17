import TitleBar from "~/components/titlebar.tsx";

import FirstIconCSS from "~/styles/tobarfirst.ts";
import TopMainArea, {
  TopMainAreaSmallTitle,
  TopMainAreaTitle,
  TopText,
} from "~/components/topmainarea.tsx";

import { TopVideoCSS } from "~/styles/topmainarea.ts";
import FeatureMain, {
  FeatureAreaTitle,
  FeatureCard,
  FeatureCardDescription,
  FeatureDisplayGrid,
} from "~/components/feature.tsx";
import { DescriptionInlineLink } from "~/components/common.tsx";

export function Home() {
  return (
    <div>
      <TitleBar>
        <a class={FirstIconCSS} href="/">NeoCMakeLsp</a>
        {/* TODO: link to document later */}
        <a>Documents</a>
        <a class="right" href="https://github.com/Decodetalkers/neocmakelsp">
          Github
        </a>
      </TitleBar>
      <TopMainArea>
        <TopText>
          <TopMainAreaTitle>
            neocmakelsp
          </TopMainAreaTitle>
          <TopMainAreaSmallTitle>
            Another lsp for cmake made for rust. The neocmakelsp also use the
            {" "}
            <DescriptionInlineLink
              link="https://microsoft.github.io/language-server-protocol/"
              tips="microsoft.github.io"
            >
              Language Server Protocal
            </DescriptionInlineLink>{" "}
            to provide various features for cmake, make it easiler for
            developing cpp program.
          </TopMainAreaSmallTitle>
        </TopText>
        <video autoplay={true} loop={true} muted={true} class={TopVideoCSS}>
          <source src="/static/neocmakelsp.mp4" type="video/mp4" />
        </video>
      </TopMainArea>
      <FeatureMain>
        <FeatureAreaTitle>Features</FeatureAreaTitle>
        <FeatureDisplayGrid>
          <FeatureCard title="Completion Support">
            <FeatureCardDescription>
              Support complete base cmake commands, cmake package name and
              pkgconfig package name. It can even complete function in packages.
            </FeatureCardDescription>
          </FeatureCard>
          <FeatureCard title="Hover Support">
            <FeatureCardDescription>
              Support show the document of base commands. Support show where
              base information about where the function is from. Support show
              the information about the package.
            </FeatureCardDescription>
          </FeatureCard>{" "}
          <FeatureCard title="Jump Support">
            <FeatureCardDescription>
              Support jump between the cmake files. Support jump to the
              definition of the function in cmake packages.
            </FeatureCardDescription>
          </FeatureCard>
          <FeatureCard title="Format support">
            <FeatureCardDescription>
              NeoCMakeLsp has already support for builtin format, with the power
              of tree-sitter.
            </FeatureCardDescription>
          </FeatureCard>
          <FeatureCard title="Semaction Highlight">
            <FeatureCardDescription>
              Yes, it support lsp hightlight. So now your cmake files in vscode
              will become light can colorful!!
            </FeatureCardDescription>
          </FeatureCard>
          <FeatureCard title="Lint and gammar check">
            <FeatureCardDescription>
              NeoCMakeLsp support lint check and base gammar check. Lint check
              is under the support of cmake-lint, and gammar check is by
              tree-sitter.
            </FeatureCardDescription>
          </FeatureCard>
          <FeatureCard title="Document symbol">
            <FeatureCardDescription>
              Support lsp document_symbol, which provide folder support in vscode and outline support.
            </FeatureCardDescription>
          </FeatureCard>
        </FeatureDisplayGrid>
      </FeatureMain>
    </div>
  );
}
