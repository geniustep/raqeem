import { NextResponse } from "next/server";
import {
  activationAllowedTenants,
  buildActivationRedirectUrl,
  parseActivationTokenHint,
} from "@/lib/account-activation-router";

const PRIVATE_HEADERS = {
  "Cache-Control": "no-store, max-age=0",
  Pragma: "no-cache",
  "Referrer-Policy": "no-referrer",
  "X-Robots-Tag": "noindex, nofollow, noarchive",
} as const;

function activationFailed(): NextResponse {
  return NextResponse.json(
    { error: "activation_failed" },
    { status: 404, headers: PRIVATE_HEADERS },
  );
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ token?: string[] }> },
): Promise<NextResponse> {
  const { token } = await params;
  const hint = token?.length === 1 ? parseActivationTokenHint(token[0] ?? "") : null;

  if (!hint || !activationAllowedTenants().has(hint.tenant)) {
    return activationFailed();
  }

  return NextResponse.redirect(buildActivationRedirectUrl(hint), {
    status: 302,
    headers: PRIVATE_HEADERS,
  });
}
