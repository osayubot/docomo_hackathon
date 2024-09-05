"use client";
import { useState } from "react";

export default function RecommendCategory() {
  const [gender, setGender] = useState("");
  const [birth, setBirth] = useState("");
  const [hobby, setHobby] = useState("");
  const [isOutdoor, setIsOutdoor] = useState(false);
  const [result, setResult] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // APIリクエスト
    try {
      // レスポンスを取得してステートにセット
      const result = await fetchRecommendCategory({
        gender,
        birth,
        hobby,
        isOutdoor,
        budget: 5000,
      });
      setResult(JSON.stringify(result));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h1>おすすめのカテゴリを取得する</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>性別:</label>
          <input
            type="text"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        <div>
          <label>生年月日:</label>
          <input
            type="date"
            value={birth}
            onChange={(e) => setBirth(e.target.value)}
          />
        </div>
        <div>
          <label>趣味:</label>
          <input
            type="text"
            value={hobby}
            onChange={(e) => setHobby(e.target.value)}
          />
        </div>
        <div>
          <label>アウトドア派:</label>
          <input
            type="checkbox"
            checked={isOutdoor}
            onChange={(e) => setIsOutdoor(e.target.checked)}
          />
        </div>
        <button type="submit">カテゴリを取得</button>
      </form>

      {result && (
        <div>
          <h2>結果:</h2>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}
