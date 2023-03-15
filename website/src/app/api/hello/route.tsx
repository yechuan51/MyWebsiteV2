import { NextResponse } from "next/server";

export async function GET(request: Request): Promise<Response> {
  console.log("WTF");
  console.log(request);
  return new Response("Hello, Next.js!");
}
