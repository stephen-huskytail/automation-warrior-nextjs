import { NextResponse } from "next/server";

const DESTINATION = "/?ref=recommended-tool";

export async function GET(request: Request) {
  const target = new URL(DESTINATION, request.url);
  return NextResponse.redirect(target, { status: 307 });
}
