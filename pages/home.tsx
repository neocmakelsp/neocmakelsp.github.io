import TitleBar from "~/components/titlebar.tsx";

import FirstIconCSS from "~/styles/tobarfirst.ts";
import TopMainArea, {
  TopMainAreaSmallTitle,
  TopMainAreaTitle,
} from "~/components/topmainarea.tsx";

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
        <TopMainAreaTitle>
          Another lsp for cmake
        </TopMainAreaTitle>
        <TopMainAreaSmallTitle>
          powered by treesitter, and rust
        </TopMainAreaSmallTitle>
      </TopMainArea>
      <h1>ee</h1>
    </div>
  );
}
