export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">

      <h1 className="text-5xl font-bold mb-8">
        GrowthPilot AI Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-6 mb-8">

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h3 className="text-gray-400">Projects</h3>
          <p className="text-4xl font-bold">12</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h3 className="text-gray-400">AI Credits</h3>
          <p className="text-4xl font-bold">800</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h3 className="text-gray-400">Reports</h3>
          <p className="text-4xl font-bold">54</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h3 className="text-gray-400">Plan</h3>
          <p className="text-4xl font-bold">Pro</p>
        </div>

      </div>

      <h2 className="text-3xl font-bold mb-4">
        AI Agents
      </h2>

      <div className="grid grid-cols-3 gap-6">

        <div className="bg-zinc-900 p-6 rounded-xl">
          🔍 SEO AI Agent
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          ✍️ Content AI Agent
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          🤖 Chat Assistant
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          🎯 Google Ads AI
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          📧 CRM AI
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          📊 Analytics AI
        </div>

      </div>

    </div>
  );
}