import TitleBar from "~/components/titlebar.tsx";

import FirstIconCSS from "~/styles/tobarfirst.ts";
import TopMainArea, {
  TopMainAreaSmallTitle,
  TopMainAreaTitle,
  TopText,
} from "~/components/topmainarea.tsx";

import { TopVideoCSS } from "~/styles/topmainarea.ts";

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
            Another lsp for cmake
          </TopMainAreaTitle>
          <TopMainAreaSmallTitle>
            powered by treesitter, and rust
          </TopMainAreaSmallTitle>
        </TopText>
        <video autoplay={true} loop={true} muted={true} class={TopVideoCSS}>
          <source src="/static/neocmakelsp.mp4" type="video/mp4" />
        </video>
      </TopMainArea>
      <h1>ee</h1>
    </div>
  );
}
