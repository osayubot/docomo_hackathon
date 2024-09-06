import prisma from "@/libs/Prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const user = await prisma.items.findMany({
      where: { id: token.sub },

      // include: { orders: true },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error("Error fetching DIDs:", error);
    return NextResponse.json(
      { error: "Failed to fetch DIDs" },
      { status: 500 }
    );
  }
};
