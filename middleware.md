import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  const token = req.cookies.get("access_token")?.value;

  if (!token && req.url === "http://localhost:3000/") {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (!token && req.url === "http://localhost:3000/discover") {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (!token && req.url === "http://localhost:3000/destination") {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (!token && req.url === "http://localhost:3000/about") {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (!token && req.url === "http://localhost:3000/tripplan") {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (token && req.url === "http://localhost:3000/login") {
    return NextResponse.redirect(new URL("/", req.url));
  }
  if (token && req.url === "http://localhost:3000/register") {
    return NextResponse.redirect(new URL("/", req.url));
  }
}

// export const config = {
//   matcher: [
//     "/",
//     "/discover/:path*",
//     "/destination/:path*",
//     "/about/:path*",
//     "/tripplan/:path*",
//   ],
// };
