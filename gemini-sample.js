const { GoogleGenAI } = require("@google/genai");

async function generateContent() {
  const client = new GoogleGenAI({
    vertexai: true,
    project: "oned-japan",
    location: "global",
  });

  const response = await client.models.generateContent({
    model: "gemini-2.5-flash",
    contents:
      "こんにちは。Geminiをアプリケーションのデフォルト認証情報経由で呼び出しています。",
  });

  console.log(response.text);

  return response.text;
}

generateContent().catch(console.error);
