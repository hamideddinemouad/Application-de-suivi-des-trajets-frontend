import { Truck, Route, Users } from "lucide-react";

export default function Kpi({ totalTrucks, totalTrips, totalDrivers }) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      
      {/* Vehicles */}
      <div className="relative rounded-2xl bg-white border border-slate-200 p-5 transition-all hover:-translate-y-1 hover:shadow-lg">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50 to-transparent opacity-60 pointer-events-none" />

        <div className="relative flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-slate-600">Total Vehicles</p>
            <p className="mt-2 text-3xl font-semibold text-slate-900">
              {totalTrucks}
            </p>
            <span className="mt-2 inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-700">
              Trucks
            </span>
          </div>

          <div className="rounded-xl bg-blue-100 p-2 text-blue-600">
            <Truck size={22} />
          </div>
        </div>
      </div>

      {/* Trips */}
      <div className="relative rounded-2xl bg-white border border-slate-200 p-5 transition-all hover:-translate-y-1 hover:shadow-lg">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-50 to-transparent opacity-60 pointer-events-none" />

        <div className="relative flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-slate-600">Ongoing Trips</p>
            <p className="mt-2 text-3xl font-semibold text-slate-900">
              {totalTrips}
            </p>
            <span className="mt-2 inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
              In progress
            </span>
          </div>

          <div className="rounded-xl bg-emerald-100 p-2 text-emerald-600">
            <Route size={22} />
          </div>
        </div>
      </div>

      {/* Drivers */}
      <div className="relative rounded-2xl bg-white border border-slate-200 p-5 transition-all hover:-translate-y-1 hover:shadow-lg">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-50 to-transparent opacity-60 pointer-events-none" />

        <div className="relative flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-slate-600">Total Drivers</p>
            <p className="mt-2 text-3xl font-semibold text-slate-900">
              {totalDrivers}
            </p>
            <span className="mt-2 inline-flex items-center rounded-full bg-violet-100 px-2.5 py-0.5 text-xs font-medium text-violet-700">
              Active
            </span>
          </div>

          <div className="rounded-xl bg-violet-100 p-2 text-violet-600">
            <Users size={22} />
          </div>
        </div>
      </div>

    </section>
  );
}
