import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // zero-password reads databases/<domain>/rule.json with a path built at request time,
  // so file tracing cannot see it. Include the whole directory in the API bundle.
  // Keys are picomatch globs on the route path, so the brackets are escaped.
  outputFileTracingIncludes: {
    "/api/\\[domain\\]": ["./node_modules/zero-password/databases/**/*"],
  },
};

export default nextConfig;
