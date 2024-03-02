## We write "SERVER SIDE" code in API Routes.
## Any file inside the folder pages/api is mapped to /api/* and will be treated as an API endpoint instead of a page . They are server-side only bundles and won't increase your client-side bundle size.
## API routes provide a solution to build a public API with Next.js.
## api folder is a reserved folder there and 'route.js' is a reserved file.
## Try not to use "default" word with the function.
## Try to use {} for imports.
## [] are use for dynamic routing.
## we use async await in APIs making beacuse whenever we make APIs, they always return a promise. So, to handle this, we have to make the function and method async.
## NextJS routing is file-based.
## The cache: "no-store" directive is used in HTTP headers to instruct the browser not to store any version of the requested resource. It means that the browser should always make a request to the server and not rely on a cached copy, whether in memory or on disk.