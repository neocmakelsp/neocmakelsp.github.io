import TitleBar from "~/components/titlebar.tsx";

export function Home() {
  return (
    <div>
      <TitleBar>
        <a href="/" aria-label="/static/neocmakelsp.png">Neocmakelsp</a>
        {/* TODO: link to document later */}
        <a>Documents</a>
      </TitleBar>
    </div>
  );
}
