import { DocTopBar } from "~/components/titlebar.tsx";
import styled from "@nobody/styled-components-deno";
import { MenuButton, SideBar } from "~/styles/sidebar.ts";
import { useState } from "preact/hooks";
import React from "react";
const MarkdownArea = styled.div<{ isOpen: boolean }>`
  overflow-y: scroll;
  overflow-x: hidden;
  overflow-wrap: break-word;
  padding-left: ${({ isOpen }) => isOpen ? "200px" : "50px"};
  padding-right: 40px;
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

documentKeys.push("introduction");
documentKeys.push("install");
documentKeys.push("usage");

const StringToDomComponent = ({ htmlString }: { htmlString: string }) => {
  return <MarkdownAreaCSS dangerouslySetInnerHTML={{ __html: htmlString }} />;
};
export function Header() {
  return (
    <DocTopBar>
      <a href="../">Neocmakelsp</a>
      <a class="right" href="https://github.com/neocmakelsp/neocmakelsp">
        Github
      </a>
    </DocTopBar>
  );
}

type IndexInfo = {
  title: string;
  document: string;
};

export function Doc({ title, document }: IndexInfo) {
  const openWindow = globalThis.localStorage.getItem("windowOpen") == "true";
  const [isOpen, setIsOpen] = useState(openWindow);
  const selected = title;
  const toggleOpen = () => {
    const openValue = !isOpen ? "true" : "false";
    globalThis.localStorage.setItem("windowOpen", openValue);
    setIsOpen(!isOpen);
  };

  const getHtmlName = (key: string) => {
    if (key == "introduction") {
      return "index.html";
    }
    return `${key}.html`;
  };
  const sidebarList: React.FC[] = [];
  documentKeys.forEach((key) => {
    sidebarList.push(
      <LeftA selected={key == selected} href={getHtmlName(key)}>
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
    const nextFileName = documentKeys[index + 1];
    globalThis.location.assign(getHtmlName(nextFileName));
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
    const preFileName = documentKeys[index - 1];
    globalThis.location.assign(getHtmlName(preFileName));
  };

  return (
    <>
      <MenuButton
        isOpen={isOpen}
        alwaysShown={true}
        top={50}
        left={170}
        onClick={() => toggleOpen()}
      />
      <SideBar isOpen={isOpen} zIndex={2} top={45} width={150}>
        {sidebarList}
      </SideBar>

      <MarkdownArea isOpen={isOpen}>
        <StringToDomComponent htmlString={document} />
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
