import {
  LayoutDashboard,
  Calendar,
  Target,
  BookOpen,
  Brain,
  Briefcase,
  Bot,
  Settings,
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: Calendar, label: "Planner" },
  { icon: Target, label: "Goals" },
  { icon: BookOpen, label: "Journal" },
  { icon: Brain, label: "Knowledge" },
  { icon: Briefcase, label: "Business" },
  { icon: Bot, label: "AI Coach" },
  { icon: Settings, label: "Settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-72 h-screen bg-zinc-950 border-r border-zinc-800 text-white flex flex-col">
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-zinc-800">
        <h1 className="text-2xl font-bold">LukeOS</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map(({ icon: Icon, label }) => (
          <button
            key={label}
            className="w-full flex items-center gap-3 rounded-xl px-4 py-3 text-left hover:bg-zinc-800 transition"
          >
            <Icon size={20} />
            <span>{label}</span>
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className="border-t border-zinc-800 p-4">
        <p className="text-xs text-zinc-500">LukeOS v0.1.0</p>
      </div>
    </aside>
  );
}
