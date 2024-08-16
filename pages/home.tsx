import TitleBar from "~/components/titlebar.tsx";

import FirstIconCss from "~/styles/tobarfirst.ts";

export function Home() {
  return (
    <div>
      <TitleBar>
        <a class={FirstIconCss} href="/">NeoCMakeLsp</a>
        {/* TODO: link to document later */}
        <a>Documents</a>
        <a class="right" href="https://github.com/Decodetalkers/neocmakelsp">
          Github
        </a>
      </TitleBar>
    </div>
  );
}
