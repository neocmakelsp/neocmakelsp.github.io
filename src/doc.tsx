import { render } from "preact";

import { DocTopBar } from "~/components/titlebar.tsx";
import styled from "@nobody/styled-components-deno";
import { MenuButton, SideBar } from "~/styles/sidebar.ts";
import { useState } from "preact/hooks";
import { result as InstallResult } from "./doc/installdoc.ts";
import { result as UsageResult } from "./doc/usagedoc.ts";
import React from "react";
const MarkdownArea = styled.div<{ isOpen: boolean }>`
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  overflow-wrap: break-word;
  padding-left: ${({ isOpen }) => isOpen ? "280px" : "80px"};
  padding-right: 2%;
  padding-top: 60px;
  transition: padding-left 0.3s ease-in-out;
`;

const LeftA = styled.a<{ selected?: boolean }>`
  color: ${({ selected }) => selected ? "#0703fc" : "#f2f2f2"};
  text-align: center;
  padding: 14px 20px;
  text-decoration: none;
  font-size: 28px;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
    color: black;
  }
`;

const documentIndex = new Map<string, string>();

documentIndex.set("install", InstallResult);
documentIndex.set("usage", UsageResult);

const mount = document.getElementById("mount");

const StringToDomComponent = ({ htmlString }: { htmlString: string }) => {
  return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
};
function Header() {
  return (
    <DocTopBar>
      <a href="../">Neocmakelsp</a>
      <a class="right" href="https://github.com/neocmakelsp/neocmakelsp">
        Github
      </a>
    </DocTopBar>
  );
}

function Doc() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("install");
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const sidebarList: React.FC[] = [];
  documentIndex.keys().forEach((key) => {
    sidebarList.push(
      <LeftA selected={key == selected} onClick={() => setSelected(key)}>
        {key}
      </LeftA>,
    );
  });

  return (
    <>
      <MenuButton
        isOpen={isOpen}
        alwaysShown={true}
        top={50}
        onClick={() => toggleOpen()}
      />
      <SideBar isOpen={isOpen} zIndex={2} top={"40px"}>
        {sidebarList}
      </SideBar>

      <MarkdownArea isOpen={isOpen}>
        <StringToDomComponent htmlString={documentIndex.get(selected) || ""} />
      </MarkdownArea>
    </>
  );
}

if (mount) {
  render(<Doc />, mount);
}

const header = document.getElementById("header");

if (header) {
  render(<Header />, header);
}

export { StringToDomComponent };
