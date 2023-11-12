import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'zh'],
 
  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: 'en',
  localeDetection: true,
  localePrefix: 'as-needed'
  
});
 
export const config = {
  // Skip all paths that should not be internationalized. This example skips
  // certain folders and all pathnames with a dot (e.g. favicon.ico)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};

// export default async function middleware(request: NextRequest) {
//   // Step 1: Use the incoming request
//   const defaultLocale = request.headers.get("x-default-locale") || "en";

//   // Step 2: Create and call the next-intl middleware
//   const handleI18nRouting = createMiddleware({
//     // A list of all locales that are supported
//     locales: ["en", "zh"],

//     // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
//     defaultLocale: "en",
//   });
//   const response = handleI18nRouting(request);

//   // Step 3: Alter the response
//   response.headers.set("x-default-locale", defaultLocale);

//   return response;
// }

// export const config = {
//   // Skip all paths that should not be internationalized. This example skips
//   // certain folders and all pathnames with a dot (e.g. favicon.ico)
//   matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
// };