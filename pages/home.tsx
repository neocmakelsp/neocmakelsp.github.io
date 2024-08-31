import TitleBar from "~/components/titlebar.tsx";

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
import InstallMain, {
  InstallAreaTitle,
  InstallBody,
} from "~/components/install.tsx";
import ContributeMain, { ContributeTitle } from "~/components/contribute.tsx";

import { MenuButton, SideBar } from "~/styles/sidebar.ts";

import { useState } from "preact/hooks";

export function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <TitleBar>
        <a href="#main">Neocmakelsp</a>
        <a href="#feature">Features</a>
        <a href="#install">Install</a>
        <a class="right" href="https://github.com/neocmakelsp/neocmakelsp">
          Github
        </a>
      </TitleBar>
      <MenuButton onClick={() => toggleOpen()} />
      <SideBar isOpen={isOpen}>
        <a href="#main">Neocmakelsp</a>
        <a href="#feature">Features</a>
        <a href="#install">Install</a>
        <a class="bottom" href="https://github.com/neocmakelsp/neocmakelsp">
          Github
        </a>
        <button class="bottom" onClick={() => toggleOpen()}>X</button>
      </SideBar>
      <TopMainArea>
        <TopText>
          <TopMainAreaTitle>
            neocmakelsp
          </TopMainAreaTitle>
          <TopMainAreaSmallTitle>
            Another lsp for cmake made with rust powered by tower-lsp with lots
            of{" "}
            <DescriptionInlineLink link="#feature" tips="features">
              features
            </DescriptionInlineLink>. Neocmakelsp use the{" "}
            <DescriptionInlineLink
              link="https://microsoft.github.io/language-server-protocol/"
              tips="microsoft.github.io"
            >
              Language Server Protocol
            </DescriptionInlineLink>{" "}
            to provide various features for cmake, make it easiler for
            developing cpp program.
          </TopMainAreaSmallTitle>
        </TopText>
        <TopVideoCSS autoplay={true} loop={true} muted={true}>
          <source src="/static/neocmakelsp.mp4" type="video/mp4" />
        </TopVideoCSS>
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
              Yes, it support lsp highlight. So now your cmake files in vscode
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
              Support lsp document_symbol, which provide folder support in
              vscode and outline support.
            </FeatureCardDescription>
          </FeatureCard>
        </FeatureDisplayGrid>
      </FeatureMain>
      <InstallMain>
        <InstallAreaTitle>
          How to Install
        </InstallAreaTitle>
        <InstallBody>
          <p>
            The lsp itself can be installed either from{" "}
            <DescriptionInlineLink
              link="https://crates.io/crates/neocmakelsp"
              tips="need to install rust"
            >
              crates.io
            </DescriptionInlineLink>{" "}
            or from{" "}
            <DescriptionInlineLink
              link="https://github.com/neocmakelsp/neocmakelsp/releases"
              tips="Github"
            >
              latest release
            </DescriptionInlineLink>{" "}
            from github.
          </p>
          <p>
            For vscode user, you can use plugin{" "}
            <DescriptionInlineLink
              link="https://github.com/neocmakelsp/neocmakelsp-vscode"
              tips="can be installed from vscode / codeoss market"
            >
              neocmakelsp-vscode
            </DescriptionInlineLink>, for neovim or emacs user, you should read
            our README.md.
          </p>
        </InstallBody>
      </InstallMain>
      <ContributeMain>
        <ContributeTitle>
          You can help and make contributions for us on the Github.
        </ContributeTitle>
      </ContributeMain>
    </div>
  );
}
