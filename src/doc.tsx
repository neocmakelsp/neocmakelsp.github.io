import { render } from "preact";

import { DocTopBar } from "~/components/titlebar.tsx";
import styled from "@nobody/styled-components-deno";
import { MenuButton, SideBar } from "~/styles/sidebar.ts";
import { useState } from "preact/hooks";
import { result as InstallResult } from "./doc/installdoc.ts";
import { result as UsageResult } from "./doc/usagedoc.ts";
import React from "react";
const MarkdownArea = styled.div<{ isOpen: boolean }>`
  overflow-y: scroll;
  overflow-x: hidden;
  overflow-wrap: break-word;
  padding-left: ${({ isOpen }) => isOpen ? "170px" : "40px"};
  padding-right: 5%;
  padding-top: 80px;
  padding-bottom: 80px;
  transition: padding-left 0.3s ease-in-out;
`;

const GoPreNextNav = styled.nav`
  display: block;
`;

const GoPreNextA = styled.button<{ direction?: "left" | "right" }>`
  border: 0px;
  cursor: pointer;
  padding: 14px 20px;
  text-decoration: none;
  font-size: 20px;
  float: ${({ direction }) => direction == "right" ? "right" : "left"};
  &:hover {
    background-color: #ddd;
    color: black;
  }
`;

const LeftA = styled.a<{ selected?: boolean }>`
  color: ${({ selected }) => selected ? "#0703fc" : "#f2f2f2"};
  text-align: center;
  padding: 14px 20px;
  text-decoration: none;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
    color: black;
  }
`;

const MarkdownAreaCSS = styled.div`
  & pre {
    padding: 10px;
    background-color: #454441;
    border-radius: 5px;
    overflow-x: auto
  }
  & code {
    background-color: #c9c9c7;
  }
  & pre code {
    background-color: #454441;
    color: white;
  }
`;

const documentKeys: string[] = [];

const documentIndex = new Map<string, string>();

documentIndex.set("install", InstallResult);
documentKeys.push("install");
documentIndex.set("usage", UsageResult);
documentKeys.push("usage");

const StringToDomComponent = ({ htmlString }: { htmlString: string }) => {
  return <MarkdownAreaCSS dangerouslySetInnerHTML={{ __html: htmlString }} />;
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
  documentKeys.forEach((key) => {
    sidebarList.push(
      <LeftA selected={key == selected} onClick={() => setSelected(key)}>
        {key}
      </LeftA>,
    );
  });

  const next = (): string | undefined => {
    const index = documentKeys.findIndex((cp) => cp == selected);
    if (index < 0 || index >= documentKeys.length - 1) {
      return undefined;
    }
    return `> ${documentKeys[index + 1]}`;
  };

  const goNext = () => {
    const index = documentKeys.findIndex((cp) => cp == selected);
    if (index < 0 || index >= documentKeys.length - 1) {
      return;
    }
    setSelected(documentKeys[index + 1]);
  };

  const pre = (): string | undefined => {
    const index = documentKeys.findIndex((cp) => cp == selected);
    if (index <= 0) {
      return undefined;
    }
    return `< ${documentKeys[index - 1]}`;
  };

  const goPre = () => {
    const index = documentKeys.findIndex((cp) => cp == selected);
    if (index <= 0) {
      return;
    }
    setSelected(documentKeys[index - 1]);
  };

  return (
    <>
      <MenuButton
        isOpen={isOpen}
        alwaysShown={true}
        top={50}
        left={150}
        onClick={() => toggleOpen()}
      />
      <SideBar isOpen={isOpen} zIndex={2} top={45} width={130}>
        {sidebarList}
      </SideBar>

      <MarkdownArea isOpen={isOpen}>
        <StringToDomComponent htmlString={documentIndex.get(selected) || ""} />
        <GoPreNextNav>
          {pre() && (
            <GoPreNextA direction={"left"} onClick={goPre}>{pre()}</GoPreNextA>
          )}
          {next() && (
            <GoPreNextA direction={"right"} onClick={goNext}>
              {next()}
            </GoPreNextA>
          )}
        </GoPreNextNav>
      </MarkdownArea>
    </>
  );
}

const mount = document.getElementById("mount");
if (mount) {
  render(<Doc />, mount);
}

const header = document.getElementById("header");

if (header) {
  render(<Header />, header);
}

export { StringToDomComponent };
