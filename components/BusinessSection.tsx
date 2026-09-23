import Link from "next/link";

type Item = { title: string; text: string; label?: string };
export default function BusinessSection({
  id,
  eyebrow,
  title,
  text,
  items,
  link,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  text?: string;
  items: Item[];
  link?: { href: string; label: string };
}) {
  return (
    <section id={id} className="approach-section business-section">
      <div className="padding-global">
        <div className="inner-container">
          <div className="approach-inner">
            <div className="content-box">
              <div className="sub-heading">{eyebrow}</div>
              <h2 className="heading-h2">{title}</h2>
              {text && <p className="text-paragraph width-640">{text}</p>}
            </div>
            <div
              className={
                "approach-steps-grid" +
                (items.length === 4 ? " grid-two-col" : "")
              }
            >
              {items.map((item) => (
                <article
                  className="approach-slider-box approach-step-card"
                  key={item.title}
                >
                  {item.label && (
                    <span className="business-card-label">{item.label}</span>
                  )}
                  <h3 className="heading-h3 approach-heading">{item.title}</h3>
                  <p className="approach-slider-text">{item.text}</p>
                </article>
              ))}
            </div>
            {link && (
              <div className="button-group">
                <Link className="secondary-button" href={link.href}>
                  {link.label}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
