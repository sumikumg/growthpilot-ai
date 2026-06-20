"use client";

import { useState } from "react";

export default function SEOAIPage() {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState("");

  const generateSEO = () => {
    setResult(`
SEO Title:
Best ${keyword} in 2026 | Complete Guide

Meta Description:
Discover everything about ${keyword}. Learn tips, strategies and best practices.

Related Keywords:
- ${keyword} guide
- ${keyword} tips
- best ${keyword}
- ${keyword} tools
`);
  };

  return (
    <main className="min-h-screen bg-black text-white p-8">

      <h1 className="text-4xl font-bold mb-6">
        SEO AI Agent
      </h1>

      <input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Enter Keyword"
        className="w-full p-4 bg-zinc-900 rounded-lg mb-4"
      />

      <button
        onClick={generateSEO}
        className="bg-purple-600 px-6 py-3 rounded-lg"
      >
        Generate SEO Report
      </button>

      {result && (
        <pre className="mt-6 bg-zinc-900 p-4 rounded-lg whitespace-pre-wrap">
          {result}
        </pre>
      )}

    </main>
  );
}