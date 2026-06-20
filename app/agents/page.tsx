export default function AgentsPage() {
  const agents = [
    "SEO AI Agent",
    "Content AI Agent",
    "Google Ads AI",
    "Meta Ads AI",
    "CRM AI Agent",
    "Analytics AI Agent"
  ];

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-5xl font-bold mb-8">
        AI Agent Marketplace
      </h1>

      <div className="grid grid-cols-3 gap-6">
        {agents.map((agent) => (
          <div
            key={agent}
            className="bg-zinc-900 p-6 rounded-xl hover:bg-purple-900 cursor-pointer"
          >
            <h2 className="text-xl font-bold">{agent}</h2>
            <p className="text-gray-400 mt-2">
              Launch and start working with this AI agent.
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}