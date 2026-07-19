export default function Sidebar() {
  return (
    <aside className="w-72 h-screen bg-zinc-950 border-r border-zinc-800 text-white flex flex-col">
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-zinc-800">
        <h1 className="text-2xl font-bold tracking-wide">LukeOS</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        <button className="w-full rounded-xl px-4 py-3 text-left transition hover:bg-zinc-800">
          🏠 Dashboard
        </button>

        <button className="w-full rounded-xl px-4 py-3 text-left transition hover:bg-zinc-800">
          📅 Planner
        </button>

        <button className="w-full rounded-xl px-4 py-3 text-left transition hover:bg-zinc-800">
          🎯 Goals
        </button>

        <button className="w-full rounded-xl px-4 py-3 text-left transition hover:bg-zinc-800">
          📖 Journal
        </button>

        <button className="w-full rounded-xl px-4 py-3 text-left transition hover:bg-zinc-800">
          🧠 Knowledge
        </button>

        <button className="w-full rounded-xl px-4 py-3 text-left transition hover:bg-zinc-800">
          💼 Business
        </button>

        <button className="w-full rounded-xl px-4 py-3 text-left transition hover:bg-zinc-800">
          🤖 AI Coach
        </button>

        <button className="w-full rounded-xl px-4 py-3 text-left transition hover:bg-zinc-800">
          ⚙️ Settings
        </button>
      </nav>

      {/* Bottom Section */}
      <div className="border-t border-zinc-800 p-4">
        <p className="text-xs text-zinc-500">LukeOS v0.1.0</p>
      </div>
    </aside>
  );
}
