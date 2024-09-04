import OpenAI from "openai";

// OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Edge環境
export const runtime = "edge";

// GET
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const message = searchParams.get("message");

  if (!message) {
    return new Response("content parameter is missing", { status: 400 });
  }
  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: message }],
    model: "gpt-3.5-turbo",
  });
  const answer = completion.choices[0].message?.content;
  return new Response(answer);
}
