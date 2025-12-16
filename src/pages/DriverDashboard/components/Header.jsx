export default function Header() {
  return (
    <header className="bg-white border-b border-slate-200">
      <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold">
            FC
          </div>
          <div>
            <p className="font-semibold leading-tight">FleetCo</p>
            <p className="text-xs text-slate-500">Driver</p>
          </div>
        </div>

        <a
          href="login.html"
          className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold hover:bg-slate-50"
        >
          Sign out
        </a>
      </div>
    </header>
  );
}
