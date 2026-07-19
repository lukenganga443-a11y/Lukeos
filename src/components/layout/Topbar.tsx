import { Search, Bell, User } from "lucide-react";

export default function Topbar() {
  return (
    <header className="h-16 border-b border-zinc-800 bg-zinc-950 flex items-center justify-between px-8 text-white">
      <div>
        <h2 className="text-xl font-semibold">Good Evening, Luke 👋</h2>

        <p className="text-sm text-zinc-400">
          Let's build something incredible today.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button className="h-10 w-10 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition flex items-center justify-center">
          <Search size={18} />
        </button>

        <button className="h-10 w-10 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition flex items-center justify-center">
          <Bell size={18} />
        </button>

        <button className="h-10 w-10 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition flex items-center justify-center">
          <User size={18} />
        </button>
      </div>
    </header>
  );
}
