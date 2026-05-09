"use client";
import * as runtime from "react/jsx-runtime";
import { useMemo } from "react";

// MDX components override map — extend as needed
const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="mdx-h1" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="mdx-h2" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="mdx-h3" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mdx-p" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="mdx-ul" {...props} />
  ),
  ol: (props: React.OlHTMLAttributes<HTMLOListElement>) => (
    <ol className="mdx-ol" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="mdx-li" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="mdx-a" {...props} />
  ),
  blockquote: (props: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="mdx-blockquote" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="mdx-strong" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="mdx-code" {...props} />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="mdx-pre" {...props} />
  ),
};

interface MDXContentProps {
  code: string;
}

export function MDXContent({ code }: MDXContentProps) {
  const Component = useMemo(() => {
    // Velite compiles MDX to a function body string — evaluate it to get the component
    // eslint-disable-next-line no-new-func
    const fn = new Function("runtime", `${code}`);
    return fn(runtime).default;
  }, [code]);

  return <Component components={components} />;
}
