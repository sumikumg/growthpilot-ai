"use client";

import { useState } from "react";

export default function ChatPage() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!message) return;

    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message
        })
      });

      const data = await res.json();

      setReply(data.reply);
    } catch (error) {
      setReply("Error connecting to AI.");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-black text-white p-8">

      <h1 className="text-4xl font-bold mb-6">
        AI Marketing Assistant
      </h1>

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask about SEO, Google Ads, CRM, Analytics..."
        className="w-full h-40 bg-zinc-900 p-4 rounded-lg mb-4"
      />

      <button
        onClick={askAI}
        className="bg-purple-600 px-6 py-3 rounded-lg"
      >
        {loading ? "Thinking..." : "Ask AI"}
      </button>

      {reply && (
        <div className="mt-6 bg-zinc-900 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-3">
            AI Response
          </h2>

          <p className="whitespace-pre-wrap">
            {reply}
          </p>
        </div>
      )}

    </main>
  );
}