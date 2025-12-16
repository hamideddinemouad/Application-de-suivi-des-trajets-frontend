export default function SideNav() {
  return (
    <aside class="w-72 bg-white border-r border-slate-200 hidden md:flex flex-col">
      <div class="p-5 border-b border-slate-200">
        <div class="flex items-center gap-3">
          <div class="h-10 w-10 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-bold">
            FC
          </div>
          <div>
            <p class="font-semibold leading-tight">FleetCo</p>
            <p class="text-xs text-slate-500">Admin Panel</p>
          </div>
        </div>
      </div>

      <nav class="p-4 space-y-1">
        <a
          href="admin-dashboard.html"
          class="flex items-center gap-3 rounded-xl px-3 py-2 bg-slate-900 text-white"
        >
          <span class="text-sm font-medium">Dashboard</span>
        </a>

        <a
          href="admin-vehicles.html"
          class="flex items-center gap-3 rounded-xl px-3 py-2 hover:bg-slate-100"
        >
          <span class="text-sm font-medium">Trucks & Trailers</span>
        </a>

        <a
          href="admin-trips.html"
          class="flex items-center gap-3 rounded-xl px-3 py-2 hover:bg-slate-100"
        >
          <span class="text-sm font-medium">Trips</span>
        </a>
      </nav>

      <div class="mt-auto p-4 border-t border-slate-200">
        <a
          href="login.html"
          class="w-full inline-flex justify-center rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
        >
          Sign out
        </a>
      </div>
    </aside>
  );
}
