"use client";

interface TocEntry {
  title: string;
  url: string;
  items: TocEntry[];
}

interface TableOfContentsProps {
  toc: TocEntry[];
}

function TocItem({ entry }: { entry: TocEntry }) {
  return (
    <li className="toc-item">
      <a className="toc-link" href={entry.url}>
        {entry.title}
      </a>
      {entry.items.length > 0 && (
        <ul className="toc-sub-list">
          {entry.items.map((child) => (
            <TocItem key={child.url} entry={child} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default function TableOfContents({ toc }: TableOfContentsProps) {
  if (toc.length === 0) return null;

  return (
    <nav className="toc-nav" aria-label="Table of contents">
      <p className="toc-heading">In this article</p>
      <ul className="toc-list">
        {toc.map((entry) => (
          <TocItem key={entry.url} entry={entry} />
        ))}
      </ul>
    </nav>
  );
}
