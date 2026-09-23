import Image from "next/image";
import Link from "next/link";

interface AuthorBoxProps {
  name: string;
}

export default function AuthorBox({ name }: AuthorBoxProps) {
  return (
    <div className="author-box">
      <div className="author-box-photo-wrap">
        <Image
          src="/images/stephen-gardner-portrait.png"
          alt="Stephen Gardner"
          width={64}
          height={64}
          className="author-box-photo"
        />
      </div>
      <div className="author-box-info">
        <p className="author-box-name">{name}</p>
        <p className="author-box-bio">
          Former Google Search team. Fractional Chief AI Officer and AI
          consultant for 7–9 figure businesses. Based in Las Vegas.
        </p>
        <Link href="/about" className="author-box-link">
          View full bio →
        </Link>
      </div>
    </div>
  );
}
