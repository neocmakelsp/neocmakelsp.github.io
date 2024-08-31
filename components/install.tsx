import {
  InstallBodyCSS,
  InstallCodeCopyCSS,
  InstallMainCSS,
  InstallTitleCSS,
} from "~/styles/install.ts";

import { useState } from "preact/hooks";

import { PropsWithChildren } from "react";
export default function InstallMain(
  { children }: PropsWithChildren,
) {
  return (
    <InstallMainCSS id="install">
      {children}
    </InstallMainCSS>
  );
}

export function InstallAreaTitle(
  { children }: PropsWithChildren,
) {
  return (
    <InstallTitleCSS>
      {children}
    </InstallTitleCSS>
  );
}

export function InstallBody(
  { children }: PropsWithChildren,
) {
  return (
    <InstallBodyCSS>
      {children}
    </InstallBodyCSS>
  );
}

export type CodeBlock = {
  code: string;
};

export function InstallCodeBlockCopy(
  { code }: CodeBlock,
) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <InstallCodeCopyCSS>
      <pre>
        <code>{code}</code>
      </pre>
      <button
        onClick={copyToClipboard}
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </InstallCodeCopyCSS>
  );
}
