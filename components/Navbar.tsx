import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4 border-b border-zinc-800">
      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/agents">Agents</Link>
        <Link href="/seo-ai">SEO AI</Link>
        <Link href="/content-ai">Content AI</Link>
        <Link href="/chat">Chat</Link>
        <Link href="/login">Login</Link>
      </div>
    </nav>
  );
}