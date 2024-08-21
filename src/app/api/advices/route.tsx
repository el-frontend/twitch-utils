import { advices } from "@/lib/_mocks";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const ai = searchParams.get("ai");
  console.log(ai);

  // generate a ramdom number index using the length of advices
  const randomIndex = Math.floor(Math.random() * advices.length);

  try {
    const advice = advices[randomIndex];
    return Response.json({ advice });
  } catch (e) {
    return new Response("Internal server error", {
      status: 500,
    });
  }
}
