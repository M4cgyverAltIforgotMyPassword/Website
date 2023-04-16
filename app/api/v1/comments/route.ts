import prisma from "@/components/prisma/client";
import { NextRequest, NextResponse } from "next/server";

/**
 * A GET request handler that fetches all the comments from the database,
 * optionally filtered by documentId, in descending order based on their IDs,
 * and returns them as a JSON response.
 *
 * @param request The Next.js request object.
 * @returns A Next.js response object containing a JSON representation of the comments.
 */
export async function GET(request: NextRequest) {
  const documentId = request.nextUrl.searchParams.get("documentId");

  const where = documentId ? { documentId: parseInt(documentId as string, 10), visible:true } : {visible:true};

  const data = await prisma.comments.findMany({
    where,
    orderBy: { id: 'desc' },
  });

  return new NextResponse(JSON.stringify(data), { status: 200 });
}


/**
 * A POST request handler that creates a new petitionCookiePost in the database
 * using the name and comment data sent in the request body, and returns the new
 * petitionCookiePost as a JSON response.
 *
 * @param request The Next.js request object.
 * @returns A Next.js response object containing a JSON representation of the new petitionCookiePost.
 */
export async function POST(request: NextRequest) {
  const {name = "", comment = "", documentId = 1}  = await request.json();

  const status = await prisma.comments.create({data: {name: name, comment: comment, documentId: documentId}}); 

  return new NextResponse(JSON.stringify(status), {status: 200}); 
}
