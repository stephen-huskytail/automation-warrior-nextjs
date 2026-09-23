import styles from "./TestimonialsSection.module.css";

// Replace each sample with an approved client quote and attribution before
// setting placeholder to false. These are not real client endorsements.
const testimonials = [
  {
    theme: "AI leadership",
    quote:
      "We had plenty of AI ideas, but no clear priorities. Stephen helped us connect the work to our business goals, decide what to tackle first, and give our leadership team a plan we could act on.",
    attribution: "CEO / Founder",
    placeholder: true,
  },
  {
    theme: "A more capable team",
    quote:
      "Our people needed practical ways to use AI in their everyday work. The training and workflow changes helped the team spend less time on repetitive tasks and more time on customers, decisions, and delivery.",
    attribution: "Operations leader",
    placeholder: true,
  },
  {
    theme: "Results we can evaluate",
    quote:
      "What stood out was the focus on whether the changes actually helped the business. We had a clear baseline, a focused pilot, and a straightforward way to review quality, team adoption, and the impact on our operations.",
    attribution: "Managing director",
    placeholder: true,
  },
];

export default function TestimonialsSection() {
  const hasPlaceholders = testimonials.some((item) => item.placeholder);

  return (
    <section id="testimonials" className="approach-section" aria-labelledby="testimonials-heading">
      <div className="padding-global">
        <div className="inner-container">
          <div className="approach-inner">
            <div className="content-box">
              <div className="sub-heading">
                {hasPlaceholders ? "Testimonial placeholders" : "Client perspectives"}
              </div>
              <h2 id="testimonials-heading" className="heading-h2">
                Clear direction. More capable teams.
              </h2>
              {hasPlaceholders && (
                <p className="text-paragraph width-640">
                  Sample wording for future client testimonials. Quotes marked
                  as placeholders are illustrative, not client endorsements.
                </p>
              )}
            </div>
            <div className={styles.grid}>
              {testimonials.map((item) => (
                <figure className={styles.card} key={item.theme}>
                  <div className={styles.theme}>{item.theme}</div>
                  <span className={styles.quoteMark} aria-hidden="true">“</span>
                  <blockquote className={styles.quote}>
                    <p>{item.quote}</p>
                  </blockquote>
                  <figcaption className={styles.caption}>
                    <span className={styles.attribution}>{item.attribution}</span>
                    {item.placeholder && (
                      <span className={styles.placeholder}>Placeholder testimonial</span>
                    )}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
