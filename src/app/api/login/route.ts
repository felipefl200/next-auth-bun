import prisma from "@/app/lib/prisma";
import { verify } from "argon2";
import { NextRequest, NextResponse } from "next/server";

type userProps = {
  username: string;
  password: string;
};

export async function POST(request: NextRequest) {
  const body: userProps = await request.json();

  const user = await prisma.user.findUnique({
    where: {
      email: body.username,
    },
  });

  if (user && (await verify(body.password, user.password))) {
    const { password, ...userWithoutPass } = user;
    return NextResponse.json({ userWithoutPass });
  } else {
    return NextResponse.json(
      { message: "Credenciais não conferem" },
      { status: 401 }
    );
  }
}
