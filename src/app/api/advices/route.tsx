import {
  generateRandomAdvice,
  generateRandomAIAdvice,
} from "@/lib/server/services/advices";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const ai = searchParams.get("ai");
  let response = "";
  if (ai === "true") {
    response = await generateRandomAIAdvice();
  } else {
    response = await generateRandomAdvice();
  }

  return new Response(response);
}
