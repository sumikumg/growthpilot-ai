"use client";

import { useState } from "react";

export default function ContentAIPage() {

  const [topic, setTopic] = useState("");
  const [content, setContent] = useState("");

  const generateContent = () => {
    setContent(`
🔥 LinkedIn Post

Excited to share insights about ${topic}!

In today's competitive market, businesses need better strategies, automation, and analytics to stay ahead.

What are your thoughts on ${topic}?

#Marketing #AI #Growth

--------------------------------

📸 Instagram Caption

Level up your business with ${topic} 🚀

Save this post and follow for more growth tips.

#DigitalMarketing #BusinessGrowth

--------------------------------

📧 Email Copy

Subject: Improve Your Results with ${topic}

Hi,

We help businesses achieve better outcomes through ${topic}.

Let's discuss how we can help you grow.

Best Regards,
GrowthPilot AI
`);
  };

  return (
    <main className="min-h-screen bg-black text-white p-8">

      <h1 className="text-4xl font-bold mb-6">
        Content Creation AI
      </h1>

      <input
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter Topic"
        className="w-full p-4 bg-zinc-900 rounded-lg mb-4"
      />

      <button
        onClick={generateContent}
        className="bg-purple-600 px-6 py-3 rounded-lg"
      >
        Generate Content
      </button>

      {content && (
        <pre className="mt-6 bg-zinc-900 p-4 rounded-lg whitespace-pre-wrap">
          {content}
        </pre>
      )}

    </main>
  );
}