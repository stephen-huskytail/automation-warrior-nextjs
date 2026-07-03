import { NextResponse } from "next/server";

// Central affiliate link registry. Post content links to /go/<slug> so tracking
// codes are swapped here — never inside individual posts.
const AFFILIATE_LINKS: Record<string, string> = {
  gohighlevel: "https://affiliates.gohighlevel.com/?fp_ref=huskytail-digital-marketing37",
  kartra: "https://try.kartra.com/y17i0jcgbiu7",
  ontraport: "https://go.ontraport.net/t?orid=620712&opid=685",
  // Pending affiliate codes — currently plain vendor links, no tracking:
  // n8n, make, zapier, openai, anthropic
  "recommended-tool": "/",
};

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const target = AFFILIATE_LINKS[slug];
  if (!target) {
    return new NextResponse("Not found", { status: 404 });
  }
  return NextResponse.redirect(new URL(target, request.url), { status: 302 });
}
