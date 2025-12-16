import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section>
      <p className="inline-flex rounded-full bg-white border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-700">
        Trucks • Trailers • Trips • Maintenance
      </p>

      <h1 className="mt-4 text-4xl font-semibold tracking-tight">
        Simple fleet visibility for transport operations.
      </h1>

      <p className="mt-4 text-slate-600">
        Track vehicles, assign trips, follow mileage and fuel, and plan
        maintenance — all in one place.
      </p>

      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <Link to="/login" className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">  Sign in</Link>
        <Link
          to="/register"
          className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold hover:bg-slate-50"
        >
          Create account
        </Link>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="rounded-2xl bg-white border border-slate-200 p-4">
          <p className="text-sm font-semibold">Trips</p>
          <p className="mt-1 text-sm text-slate-600">
            Assign, track, and update status.
          </p>
        </div>
        <div className="rounded-2xl bg-white border border-slate-200 p-4">
          <p className="text-sm font-semibold">Fuel</p>
          <p className="mt-1 text-sm text-slate-600">
            Log liters and costs per trip.
          </p>
        </div>
        <div className="rounded-2xl bg-white border border-slate-200 p-4">
          <p className="text-sm font-semibold">Maintenance</p>
          <p className="mt-1 text-sm text-slate-600">
            Rules, alerts, and work orders.
          </p>
        </div>
      </div>
    </section>
    //     <Link
    //   to="/login"
    //   className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
    // >
    //   Sign in{" "}
    // </Link>
    // <Link
    //   to="/Register"
    //   className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold hover:bg-slate-50"
    // >
    //   Create account
    // </Link>
  );
}
