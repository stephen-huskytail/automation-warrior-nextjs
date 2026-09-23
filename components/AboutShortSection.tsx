import Image from "next/image";
import Link from "next/link";
export default function AboutShortSection() {
  return (
    <section className="approach-section founder-section">
      <div className="padding-global">
        <div className="inner-container founder-grid">
          <div className="founder-photo">
            <Image
              src="/images/stephen-gardner-portrait.png"
              alt="Stephen Gardner, founder and fractional Chief AI Officer"
              width={1024}
              height={1536}
              sizes="(max-width: 767px) 90vw, 340px"
            />
          </div>
          <div className="founder-copy">
            <div className="sub-heading">Meet Stephen Gardner</div>
            <h2 className="heading-h2">
              AI leadership grounded in building businesses.
            </h2>
            <p className="text-paragraph">
              Former Google Search team. As CMO at The Life Coach School,
              Stephen helped take the company from $1M to a $50M run rate in
              three years.
            </p>
            <p className="text-paragraph">
              Today, he brings that operating experience to 7–9 figure
              businesses as a fractional Chief AI Officer and AI consultant:
              connecting business priorities, practical implementation, and a
              more capable team.
            </p>
            <Link className="secondary-button" href="/about">
              Meet your AI partner
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
