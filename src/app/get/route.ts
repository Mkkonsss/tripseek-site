import { APP_STORE_URL } from "@/lib/launch";

// tripseekapp.com/get: a plain redirect to the App Store listing
export function GET() {
  return Response.redirect(APP_STORE_URL, 302);
}
