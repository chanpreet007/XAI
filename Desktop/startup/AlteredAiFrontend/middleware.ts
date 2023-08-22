import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { authRoutes, protectedRoutes } from "./src/router/routes";
import moment from "moment";

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get("currentUser")?.value;
  if (request.nextUrl.pathname === "/" && currentUser) {
    if (JSON.parse(currentUser).user.role == "business") {
      return NextResponse.redirect(new URL("/business/dashboard", request.url));
    }
    return NextResponse.redirect(new URL("/user/dashboard", request.url));
  }

  if (
    protectedRoutes.includes(request.nextUrl.pathname) &&
    (!currentUser ||
      moment(moment.utc().toISOString()).isAfter(
        JSON.parse(currentUser).tokens.access.expires
      ))
  ) {
    console.log(request.cookies);
    request.cookies.delete("currentUser");
    const response = NextResponse.redirect(new URL("/signIn", request.url));
    response.cookies.delete("currentUser");

    return response;
  }

  if (authRoutes.includes(request.nextUrl.pathname) && currentUser) {
    if (JSON.parse(currentUser).user.role == "business") {
      return NextResponse.redirect(new URL("/business/dashboard", request.url));
    }
    return NextResponse.redirect(new URL("/user/dashboard", request.url));
  }
}
