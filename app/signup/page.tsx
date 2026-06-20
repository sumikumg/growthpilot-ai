export default function SignupPage() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-zinc-900 p-8 rounded-2xl w-full max-w-md">

        <h1 className="text-3xl font-bold text-white mb-6">
          Create Account 🚀
        </h1>

        <input
          placeholder="Full Name"
          className="w-full p-3 mb-4 rounded-lg bg-zinc-800 text-white"
        />

        <input
          placeholder="Email"
          className="w-full p-3 mb-4 rounded-lg bg-zinc-800 text-white"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 rounded-lg bg-zinc-800 text-white"
        />

        <button className="w-full bg-purple-600 text-white p-3 rounded-lg">
          Sign Up
        </button>

      </div>
    </main>
  );
}