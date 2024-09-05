import OpenAI from "openai";

// OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Edge環境
export const runtime = "edge";

// POST
export async function POST(req: Request) {
  try {
    // リクエストのボディをパースして、データを取得
    const { gender, birth, hobby, activity } = await req.json();

    // 必須データが不足していないかチェック
    if (
      gender === undefined ||
      birth === undefined ||
      hobby === undefined ||
      activity === undefined
    ) {
      return new Response("Missing required fields", { status: 400 });
    }

    // Promptの生成
    const prompt = `
      カメラ,XRデバイス,出力機器,家事,美容,健康,エンタメという7つのカテゴリがあります。
      下記の人物はどのようなカテゴリがおすすめですか？
      出力は、下記の形のjsonで返してください
      { category: "カメラ" | "XRデバイス" | "出力機器" | "家事" | "美容" | "健康" | "エンタメ" ,
       message: string }
      性別: ${gender}
      生年月日: ${birth}
      趣味: ${hobby}
      アウトドアかインドアか: ${activity}
    `;

    // OpenAI APIリクエスト
    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "gpt-3.5-turbo",
    });

    // OpenAIのレスポンスを取得
    const answer = completion.choices[0].message?.content;

    // レスポンスを返す
    // sample response { category: "カメラ", message: "趣味が写真や映像撮影であれば、カメラカテゴリがおすすめです。" }
    return new Response(answer);
  } catch (error) {
    return new Response("Error processing the request", { status: 500 });
  }
}
