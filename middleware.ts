import { NextRequest, NextResponse } from "next/server";
import tractianService from "@/shared/http/tractian-instance";

export async function middleware(request: NextRequest) {
  const companies = await tractianService.getOrderedCompanies();

  if (companies?.length) {
    const company = companies[0];

    const url = new URL(`/company/${company.id}`, request.url);
    const searchParams = new URLSearchParams(url.search);

    searchParams.set("name", company.name);

    url.search = searchParams.toString();

    return NextResponse.redirect(url);
  }

  // Caso não tenha empresas, segue normalmente
  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
