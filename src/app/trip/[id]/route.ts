import { NextRequest } from "next/server";

const SUPABASE_URL = process.env.SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY!;

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const res = await fetch(
    `${SUPABASE_URL}/functions/v1/share-trip/${id}`,
    {
      headers: {
        apikey: SUPABASE_ANON_KEY,
      },
    }
  );

  const html = await res.text();
  return new Response(html, {
    status: res.status,
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
