import prisma from "@/app/lib/prisma";
import { hash } from "argon2";
import { NextRequest, NextResponse } from "next/server";

interface RequestBody {
  name: string;
  email: string;
  password: string;
}

export async function POST(request: NextRequest) { 

  const body: RequestBody = await request.json();

  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      password: await hash(body.password),
    },
  });

  const { password, ...result } = user;
  return NextResponse.json(result);
}
