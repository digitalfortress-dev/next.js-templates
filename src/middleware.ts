import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

import { i18n } from './i18n-config'

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages()

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales
  return matchLocale(languages, locales, i18n.defaultLocale)
}

const PUBLIC_FILE = /\.(.*)$/

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  const requestHeaders = new Headers(request.headers);

  const theme = request.cookies.get('theme')?.value || ''

  requestHeaders.set('setting-theme', theme);
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
  response.headers.set('setting-theme', theme);

  if (PUBLIC_FILE.test(pathname)) {
    return undefined
  }

  if (pathname.includes('/api')) {
    return undefined
  }
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)
    return NextResponse.redirect(new URL(`/${locale}/${pathname}`, request.url))
  }
  return response;

}

export const config = {
  matcher: ['/((?!_next).*)'],
}