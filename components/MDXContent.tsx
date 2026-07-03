"use client";
import * as runtime from "react/jsx-runtime";
import { useMemo } from "react";
import { FAQ } from "@/components/FAQ";
import { TakeawayBox } from "@/components/TakeawayBox";

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
  a: ({ href = "", ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    // Affiliate links (via /go/ redirects or direct) must carry rel="sponsored"
    const isAffiliate =
      href.startsWith("/go/") ||
      /affiliates\.gohighlevel\.com|try\.kartra\.com|app\.kartra\.com|go\.ontraport\.net/.test(href);
    if (isAffiliate) {
      return <a className="mdx-a" href={href} target="_blank" rel="sponsored nofollow noopener" {...props} />;
    }
    // Own-domain absolute URLs render as normal internal links
    const internal = href.replace(/^https?:\/\/(www\.)?automationwarrior\.ai/, "");
    if (internal !== href) {
      return <a className="mdx-a" href={internal || "/"} {...props} />;
    }
    if (/^https?:\/\//.test(href)) {
      return <a className="mdx-a" href={href} target="_blank" rel="noopener" {...props} />;
    }
    return <a className="mdx-a" href={href} {...props} />;
  },
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
  table: (props: React.TableHTMLAttributes<HTMLTableElement>) => (
    <div className="mdx-table-wrap">
      <table className="mdx-table" {...props} />
    </div>
  ),
  th: (props: React.ThHTMLAttributes<HTMLTableCellElement>) => (
    <th className="mdx-th" {...props} />
  ),
  td: (props: React.TdHTMLAttributes<HTMLTableCellElement>) => (
    <td className="mdx-td" {...props} />
  ),
  // Custom MDX components
  FAQ,
  TakeawayBox,
};

interface MDXContentProps {
  code: string;
}

export function MDXContent({ code }: MDXContentProps) {
  const Component = useMemo(() => {
    // eslint-disable-next-line no-new-func
    const fn = new Function("runtime", `${code}`);
    return fn(runtime).default;
  }, [code]);

  return <Component components={components} />;
}
