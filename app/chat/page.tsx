"use client";

import { useState } from "react";

export default function ChatPage() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");

  const askAI = () => {
    setResponse(`
Marketing Recommendation for:

${question}

SEO:
- Target long-tail keywords
- Improve page speed
- Add internal links

Content:
- Publish 3 blogs weekly
- Create LinkedIn content
- Repurpose into Instagram posts

Ads:
- Start with Google Search Ads
- Retarget website visitors

CRM:
- Send welcome email series
- Create abandoned cart campaigns
`);
  };

  return (
    <main className="min-h-screen bg-black text-white p-8">

      <h1 className="text-4xl font-bold mb-6">
        AI Marketing Assistant
      </h1>

      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask anything about SEO, Ads, CRM, Analytics..."
        className="w-full h-40 bg-zinc-900 p-4 rounded-lg mb-4"
      />

      <button
        onClick={askAI}
        className="bg-purple-600 px-6 py-3 rounded-lg"
      >
        Ask AI
      </button>

      {response && (
        <pre className="mt-6 bg-zinc-900 p-4 rounded-lg whitespace-pre-wrap">
          {response}
        </pre>
      )}

    </main>
  );
}