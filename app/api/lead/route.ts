import { NextResponse } from "next/server";

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      Allow: "POST, OPTIONS",
    },
  });
}

export async function POST() {
  return NextResponse.json(
    {
      ok: true,
      acceptedAt: new Date().toISOString(),
    },
    { status: 202 },
  );
}

export async function GET() {
  return NextResponse.json(
    {
      ok: false,
      error: "Method not allowed",
    },
    {
      status: 405,
      headers: {
        Allow: "POST, OPTIONS",
      },
    },
  );
}
