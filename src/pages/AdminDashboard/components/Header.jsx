export default function Header() {
  return (
    <header class="bg-white border-b border-slate-200">
      <div class="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <div>
          <h1 class="text-lg font-semibold">Dashboard</h1>
          <p class="text-sm text-slate-600">
            Real-time overview of fleet operations.
          </p>
        </div>

        <div class="flex items-center gap-3">
          <div class="hidden sm:block text-right">
            <p class="text-sm font-medium">Admin</p>
            <p class="text-xs text-slate-500">admin@fleetco.com</p>
          </div>
          <div class="h-10 w-10 rounded-full bg-slate-200"></div>
        </div>
      </div>
    </header>
  );
}
