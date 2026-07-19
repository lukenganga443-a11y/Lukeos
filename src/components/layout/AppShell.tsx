import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function AppShell() {
  return (
    <div className="flex h-screen bg-zinc-950">
      <Sidebar />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Topbar />

        <main className="flex-1 overflow-y-auto p-8 text-white">
          <h1 className="text-5xl font-bold">Welcome to LukeOS</h1>

          <p className="mt-4 max-w-2xl text-zinc-400 text-lg">
            The operating system for building your future.
          </p>
        </main>
      </div>
    </div>
  );
}
