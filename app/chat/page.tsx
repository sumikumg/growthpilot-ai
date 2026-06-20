"use client";

import { useState } from "react";

export default function ChatPage() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");

  const askAI = async () => {
    setResponse(`Marketing Recommendation for:

${question}

SEO:
- Target long-tail keywords
- Improve page speed
- Add internal links

Content:
- Publish 3 blogs weekly
- Create LinkedIn content
- Repurpose into Instagram posts`);
  };

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">
        AI Marketing Assistant
      </h1>

      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask about SEO, Google Ads, CRM..."
        className="border p-2 w-full"
      />

      <button
        onClick={askAI}
        className="mt-4 px-4 py-2 border"
      >
        Ask AI
      </button>

      {response && (
        <div className="mt-6 whitespace-pre-wrap">
          {response}
        </div>
      )}
    </main>
  );
}
