import { NavLink } from "react-router-dom";
export default function DriverHeader() {
  return (
    <header className="bg-white border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-bold">
            FC
          </div>
          <div className="leading-tight">
            <p className="font-semibold">FleetCo</p>
            <p className="text-xs text-slate-500">Driver</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-2">
          <NavLink
            to="/driver"
            className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
          >
            Trips
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
