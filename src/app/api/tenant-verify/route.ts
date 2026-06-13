import { NextResponse, type NextRequest } from "next/server";
import { buildTenantApiUrl, isValidTenantSlug, normalizeTenantSlug } from "@/lib/tenant";

export async function GET(request: NextRequest) {
  const rawSlug = request.nextUrl.searchParams.get("slug") ?? "";
  const slug = normalizeTenantSlug(rawSlug);

  if (!isValidTenantSlug(slug)) {
    return NextResponse.json({ success: false, error: "invalid_slug" }, { status: 400 });
  }

  try {
    const response = await fetch(buildTenantApiUrl(slug), {
      method: "GET",
      headers: { Accept: "application/json" },
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json({ success: false, error: "not_found" }, { status: 404 });
    }

    const data = (await response.json()) as { success?: boolean };
    if (data.success !== true) {
      return NextResponse.json({ success: false, error: "not_found" }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false, error: "network_error" }, { status: 502 });
  }
}
