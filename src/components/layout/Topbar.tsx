export default function Topbar() {
  return (
    <header className="h-16 border-b border-zinc-800 bg-zinc-950 text-white px-8 flex items-center justify-between">
      {/* Left */}
      <div>
        <h2 className="text-xl font-semibold">Good Evening, Luke 👋</h2>

        <p className="text-sm text-zinc-400">
          Let's build something incredible today.
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <button className="h-10 w-10 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition">
          🔍
        </button>

        <button className="h-10 w-10 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition">
          🔔
        </button>

        <button className="h-10 w-10 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition">
          👤
        </button>
      </div>
    </header>
  );
}
