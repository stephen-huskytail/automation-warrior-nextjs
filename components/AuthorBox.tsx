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
          src="/images/SG-1.jpg"
          alt="Stephen Gardner"
          width={64}
          height={64}
          className="author-box-photo"
        />
      </div>
      <div className="author-box-info">
        <p className="author-box-name">{name}</p>
        <p className="author-box-bio">
          Former Google. AI automation practitioner. 10+ years in digital marketing and workflow
          automation. Based in Las Vegas.
        </p>
        <Link href="/about" className="author-box-link">
          View full bio →
        </Link>
      </div>
    </div>
  );
}
