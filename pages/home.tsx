import TitleBar from "~/components/titlebar.tsx";

export interface HomeProps {
  label: string;
}

export function Home(
  { label }: HomeProps,
) {
  return (
    <div>
      <TitleBar>
        <a class="active" href="#home">{label}</a>
        <a href="#News">News2</a>
      </TitleBar>
      <h1> abcd </h1>
    </div>
  );
}
