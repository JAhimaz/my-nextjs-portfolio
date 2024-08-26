import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

export const locales = ["en", "zh"]

export default async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  if (pathname.startsWith("/api") || pathname.startsWith("/auth")) {
    const response = NextResponse.next({
      request: {
        headers: new Headers(request.headers),
      },
    });
    response.headers.set("cache-control", "no-store");
    return response;
  }
  const handleI18nRouting = createMiddleware({
    locales,
    defaultLocale: "en",
  });
  return handleI18nRouting(request);
}