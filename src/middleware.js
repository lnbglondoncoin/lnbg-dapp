import { NextResponse } from "next/server";
import { getLocation } from "./lib/location";

// French, english, spanish, russian
let locales = ["fr", "en", "es", "ru"];

async function getLocale(request) {
  const location = await getLocation();
  const country = location.country;
  return country == "Russia"
    ? "ru"
    : country == "France"
      ? "fr"
      : country == "Spain"
        ? "es"
        : "en";
}

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );
  if (pathname.includes("/static") || pathname.includes("/favicon")) return;
  if (pathnameHasLocale) return;

  const locale = await getLocale(request);
  if (
    locale === "en" ||
    locale === "fr" ||
    locale === "es" ||
    locale === "ru"
  ) {
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
  }
  request.nextUrl.pathname = `/en${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    "/((?!_next/static|_next/image|static/|favicon.ico|robots.txt|sitemap.xml|manifest.json).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
