"use client";

import { useState } from "react";

export default function GoogleAdsAI() {
  const [business, setBusiness] = useState("");
  const [result, setResult] = useState("");

  const generate = () => {
    setResult(`
Campaign: ${business}

Keywords:
- best ${business}
- ${business} near me
- affordable ${business}

Budget:
₹500/day

Ad Copy:
Get the best ${business} today.
Call now and grow faster.
`);
  };

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">
        Google Ads AI
      </h1>

      <input
        value={business}
        onChange={(e) => setBusiness(e.target.value)}
        placeholder="Business Type"
        className="w-full p-4 bg-zinc-900 rounded-lg mb-4"
      />

      <button
        onClick={generate}
        className="bg-purple-600 px-6 py-3 rounded-lg"
      >
        Generate Campaign
      </button>

      {result && (
        <pre className="mt-6 bg-zinc-900 p-4 rounded-lg whitespace-pre-wrap">
          {result}
        </pre>
      )}
    </main>
  );
}