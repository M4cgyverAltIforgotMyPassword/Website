import prisma from "@/components/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const sessionId = request.nextUrl.searchParams.get("sessionId");
  const path      = request.nextUrl.searchParams.get("path");
  const count     = request.nextUrl.searchParams.get("count");
  const current   = request.nextUrl.searchParams.get("current");

  const where = {
    ...(sessionId && { sessionId }),
    ...(path && { path }),
    ...(current && {
      datetime: {
        gte: new Date(Date.now() - 5 * 60 * 1000),
      },
    }),
  };

  const queryOptions: any = {
    where: where,
    orderBy: { datetime: 'desc' },
  };

  if (count) {
    const result = await prisma.views.count(queryOptions);
    return new NextResponse(JSON.stringify({ count: result }), { status: 200 });
  }

  const data = await prisma.views.findMany(queryOptions);
  return new NextResponse(JSON.stringify(data), { status: 200 });
}

export async function POST(request: NextRequest) {
  const { sessionId, path } = await request.json();

  console.log("Viewing... ", sessionId, path);

  if (!sessionId || !path) {
    return new NextResponse("Session ID and path are mandatory", { status: 400 });
  }

  const data = {
    sessionId: sessionId,
    path: path,
  };

  const status = await prisma.views.upsert({
    where: { sessionId_path: { sessionId, path } },
    create: data,
    update: { datetime: new Date() },
  });

  return new NextResponse(JSON.stringify(status), { status: 200 });
}
