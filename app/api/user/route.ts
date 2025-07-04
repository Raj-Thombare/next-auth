import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/options";

export async function GET() {

    const session = await getServerSession(authOptions);
    return NextResponse.json({
        user: session
    })
}