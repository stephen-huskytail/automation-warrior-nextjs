import Image from "next/image";
import Link from "next/link";

export default function AboutShortSection() {
  return (
    <section className="team-section" data-scroll-target="">
      <div className="padding-global">
        <div className="inner-container">
          <div className="team-inner">
            <div className="content-box-680">
              <div className="sub-heading">About Stephen</div>
              <h2 className="heading-h2">The operator behind the agents.</h2>
              <p className="text-paragraph">
                Stephen Gardner spent five-plus years on Google&apos;s Search team, then twenty years building
                businesses online. As CMO at The Life Coach School he helped take the company from $1M to a
                $50M run rate in three years — during COVID, without a fifty-person team. That
                growth-without-headcount problem is the one he&apos;s been solving ever since. Today he builds
                AI agent teams for service businesses and serves as fractional CAIO for the ones that want
                him in the room.
              </p>
              <Link href="/about" className="secondary-button">
                <span>Read Stephen&apos;s story</span>
                <Image src="/images/svgviewer-output-1.svg" alt="" width={18} height={18} className="button-icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
