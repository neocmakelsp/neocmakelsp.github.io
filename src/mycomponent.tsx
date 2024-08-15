import { PropsWithChildren } from "react";

export interface HomeProps {
  label: string;
}

export function Home(
  { children, label }: PropsWithChildren<HomeProps>,
) {
  return (
    <div>
      <h1>{label}</h1>
      {children}
    </div>
  );
}
