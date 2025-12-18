import { NavLink } from "react-router-dom";
export default function GuestHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-bold">
            FC
          </div>
          <div>
            <p className="font-semibold leading-tight">FleetCo</p>
            <p className="text-xs text-slate-500">Fleet management</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <NavLink
            to="/login"
            className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Sign in{" "}
          </NavLink>
          <NavLink
            to="/Register"
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold hover:bg-slate-50"
          >
            Create account
          </NavLink>
        </div>
      </div>
    </header>
  );
}
