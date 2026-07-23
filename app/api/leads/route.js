import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  const { name, email, company } = body;

  if (!name || !email) {
    return NextResponse.json(
      { error: "Name and email are required" },
      { status: 400 }
    );
  }

  // In a real app, this would save to a database.
  // For this demo, we log it server-side to confirm receipt.
  console.log("New lead captured:", { name, email, company });

  return NextResponse.json(
    { message: "Lead captured successfully", data: { name, email, company } },
    { status: 200 }
  );
}
