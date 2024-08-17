import TitleBar from "~/components/titlebar.tsx";

import FirstIconCSS from "~/styles/tobarfirst.ts";
import TopMainArea, {
  TopMainAreaSmallTitle,
  TopMainAreaTitle,
  TopText,
} from "~/components/topmainarea.tsx";

import { TopVideoCSS } from "~/styles/topmainarea.ts";
import FeatureMain, { FeatureAreaTitle } from "~/components/feature.tsx";
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
      </FeatureMain>
    </div>
  );
}
