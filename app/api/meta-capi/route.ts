import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const token = process.env.META_CAPI_TOKEN;
  const pixelId = process.env.META_PIXEL_ID;

  if (!token || !pixelId) {
    return NextResponse.json({ ok: false, error: "Config faltante" }, { status: 400 });
  }

  try {
    const res = await fetch(`https://graph.facebook.com/v17.0/${pixelId}/events`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data: [body],
        access_token: token,
      }),
    });

    const json = await res.json();
    return NextResponse.json(json, { status: res.ok ? 200 : 400 });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err?.message }, { status: 500 });
  }
}