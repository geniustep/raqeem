import "server-only";
import { NextResponse } from "next/server";
import { buildActivationRedirectUrl, parseActivationTokenHint } from "./account-activation-router";

const PRIVATE_HEADERS = {
  "Cache-Control": "no-store, max-age=0",
  Pragma: "no-cache",
  "Referrer-Policy": "no-referrer",
  "X-Robots-Tag": "noindex, nofollow, noarchive",
} as const;

const ACTIVATION_FAILED_HTML = `<!doctype html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>رابط التفعيل غير صالح | رقيم</title>
</head>
<body style="margin:0;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#f8fafc;color:#0f172a;display:grid;min-height:100vh;place-items:center;padding:24px;box-sizing:border-box">
  <main style="max-width:520px;text-align:center;background:#fff;border:1px solid #e2e8f0;border-radius:18px;padding:32px;box-shadow:0 10px 30px rgba(15,23,42,.06)">
    <h1 style="font-size:22px;margin:0 0 12px">تعذّر فتح رابط التفعيل</h1>
    <p style="line-height:1.8;margin:0;color:#475569">الرابط غير صالح أو انتهت صلاحيته. يرجى طلب رابط تفعيل جديد من مؤسستك.</p>
    <p lang="fr" dir="ltr" style="line-height:1.7;margin:16px 0 0;color:#64748b;font-size:14px">Ce lien d’activation est invalide ou a expiré. Veuillez demander un nouveau lien à votre établissement.</p>
  </main>
</body>
</html>`;

function activationFailed(): NextResponse {
  return new NextResponse(ACTIVATION_FAILED_HTML, {
    status: 404,
    headers: {
      ...PRIVATE_HEADERS,
      "Content-Type": "text/html; charset=utf-8",
    },
  });
}

export async function handleAccountActivationRoute(
  request: Request,
  { params }: { params: Promise<{ token?: string[] }> },
): Promise<NextResponse> {
  // Tokens use the base64url-safe alphabet and dots only. Reject percent-encoded
  // path input before Next.js decodes params so encoded separators cannot alter
  // the route/token structure.
  const rawTokenSegment = new URL(request.url).pathname.split("/")[2] ?? "";
  if (/%[0-9a-f]{2}/i.test(rawTokenSegment)) {
    return activationFailed();
  }

  const { token } = await params;
  const hint = token?.length === 1 ? parseActivationTokenHint(token[0] ?? "") : null;
  if (!hint) {
    return activationFailed();
  }

  // The token contains only a routing hint here. Authenticity, expiry and
  // tenant ownership remain the responsibility of the destination tenant API.
  return NextResponse.redirect(buildActivationRedirectUrl(hint), {
    status: 302,
    headers: PRIVATE_HEADERS,
  });
}
