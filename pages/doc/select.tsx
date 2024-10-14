import styled from "@nobody/styled-components-deno";

import { useState } from "preact/hooks";
import type { JSX } from "preact";
import React from "react";

import { isSearch, setIsSearch } from "~/pages/doc.tsx";

type DocInfo = {
  name: string;
  mddocument: string;
};

async function fetchDocument(url: string) {
  const text = await fetch(url);
  return await text.text();
}

const markdownDocuments: DocInfo[] = [
  {
    name: "introduction",
    mddocument: await fetchDocument("./markdowns/Introduction.md"),
  },
  {
    name: "install",
    mddocument: await fetchDocument("./markdowns/Install.md"),
  },
  { name: "usage", mddocument: await fetchDocument("./markdowns/Usage.md") },
];

// 前缀树节点定义
class TrieNode {
  children: { [key: string]: TrieNode };
  isEndOfWord: boolean;

  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

type SearchResult = {
  mdname: string;
  start: number;
  length: number;
  text: string;
};

function max(a: number, b: number): number {
  return a > b ? a : b;
}
function min(a: number, b: number): number {
  return a < b ? a : b;
}
function get_diff({ start, length, text }: SearchResult): React.RC {
  const realstart = max(start - 100, 0);
  const realend = min(start + length + 90, text.length);
  const text_pre = text.slice(realstart, start);
  const text_center = text.slice(start, start + length);
  const text_after = text.slice(start + length, realend);
  return (
    <p>
      {text_pre}
      <mark>{text_center}</mark>
      {text_after}
    </p>
  );
}

// 前缀树类定义
class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  // 插入单词到前缀树中
  insert(word: string): void {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  // 搜索字符串，返回匹配的起始位置和长度
  search(text: string, mdname: string): Array<SearchResult> {
    const result: Array<SearchResult> = [];
    for (let i = 0; i < text.length; i++) {
      let node = this.root;
      let j = i;
      while (j < text.length && node.children[text[j]]) {
        node = node.children[text[j]];
        if (node.isEndOfWord) {
          result.push({
            start: i,
            length: j - i + 1,
            mdname,
            text,
          });
        }
        j++;
      }
      i = j;
    }
    return result;
  }
}

const SearchGlobalCenter = styled.div<{ visible: boolean }>`
  position: fixed;
  background-color: transparent;
  visibility: ${({ visible }) => visible ? "visible" : "hidden"};
  width: 100%;
  backdrop-filter: blur(${({ visible }) => visible ? 20 : 0}px);
  height: 100vh;
  display: flex;
  z-Index: 8;
  align-items: center;
  flex-direction: column;
  transition: backdrop-filter 0.3s ease-in-out;
`;

const SearchInputArea = styled.div`
  backdrop-filter: blur(2px);
  margin-top: 15px;
  border: auto;
  width: 60%;
  height: 50px;
  display: flex;
  flex-direction:row;
  align-items: center;
`;

const SearchInput = styled.input`
  backdrop-filter: blur(2px);
  margin-top: 15px;
  border: auto;
  border-radius: 30px;
  width: 100%;
  height: 50px;
  font-size: 20px;
  padding-left: 20px;
`;

const SearchClearBtn = styled.button<{ visible: boolean }>`
  z-Index: 9;
  position: fixed;
  top: 30px;
  right: 10px;
  backdrop-filter: blur(${({ visible }) => visible ? 2 : 0}px);
  visibility: ${({ visible }) => visible ? "visible" : "hidden"};
  height: 25px;
  aspect-ratio : 1 / 1;
  border-radius: 50%;
  background-color: #ddddddaa;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  @media screen and (min-width:700px) {
    height: 30px;
  }
`;

const SearchUl = styled.ul`
  border: auto;
  border-radius: 30px;
  background-color: #ffffffaa;
  backdrop-filter: blur(10px);
  width: 60%;
  overflow:scroll;
  overflow-x: hidden;
  scrollbar-width: thin;
  & li {
    list-style-type: none;
    cursor: pointer;
    margin-right: 20px;
    margin-bottom: 20px;
  }
  & li:hover {
    background-color: #ffffaaaa;
  }
`;

const getHtmlName = (key: string) => {
  if (key == "introduction") {
    return "index.html";
  }
  return `${key}.html`;
};

function gotoPage(key: string) {
  const page = getHtmlName(key);
  globalThis.location.assign(page);
}

export function SearchGlobalView() {
  const [searchRs, setSearchRs] = useState<SearchResult[]>([]);
  const onTextChange = (input: JSX.TargetedEvent<HTMLInputElement>) => {
    const value = input.currentTarget.value;
    if (value.length === 0) {
      setSearchRs([]);
      return;
    }
    const trie = new Trie();
    const patterns = value.split(" ");
    patterns.forEach((pattern) => trie.insert(pattern));
    let res: SearchResult[] = [];
    for (const { name, mddocument } of markdownDocuments) {
      const result = trie.search(mddocument, name);
      res = [...result, ...res];
    }
    setSearchRs(res);
  };
  return (
    <>
      <SearchClearBtn
        visible={isSearch.value}
        onClick={() => {
          setIsSearch(false);
        }}
      >
        x
      </SearchClearBtn>
      <SearchGlobalCenter visible={isSearch.value}>
        <SearchInputArea>
          <SearchInput id="searchInput" onInput={onTextChange} autofocus />
        </SearchInputArea>
        {searchRs.length != 0 &&
          (
            <SearchUl>
              {searchRs.map((item) => (
                <li onClick={() => gotoPage(item.mdname)}>
                  <h3>{item.mdname}</h3>
                  {get_diff(item)}
                </li>
              ))}
            </SearchUl>
          )}
      </SearchGlobalCenter>
    </>
  );
}
