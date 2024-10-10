import { render } from "preact";

import InstallDoc from "./doc/installdoc.tsx";

import styled from "@nobody/styled-components-deno";

const MarkdownArea = styled.div`
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  overflow-wrap: break-word;
  padding-left: 150px;
  padding-right: 5%;
  padding-top: 10px;
`;

const mount = document.getElementById("mount");

const StringToDomComponent = ({ htmlString }: { htmlString: string }) => {
  return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
};

function Doc() {
  return (
    <MarkdownArea>
      <InstallDoc />
    </MarkdownArea>
  );
}

if (mount) {
  render(<Doc />, mount);
}

export { StringToDomComponent };
