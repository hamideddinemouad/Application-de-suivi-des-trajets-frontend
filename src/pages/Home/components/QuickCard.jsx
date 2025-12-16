export default function QuickCard() {
  return (
    <section className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8">
      <h2 className="text-lg font-semibold">Quick access</h2>
      <p className="mt-1 text-sm text-slate-600">Choose your workspace.</p>

      <div className="mt-5 space-y-3">
        <a
          href="admin-dashboard.html"
          className="block rounded-2xl border border-slate-200 p-5 hover:bg-slate-50"
        >
          <p className="text-sm text-slate-600">Admin</p>
          <p className="mt-1 font-semibold">
            Manage fleet, trips, maintenance, and reports
          </p>
          <p className="mt-2 text-sm text-slate-600">
            Create vehicles, assign drivers, configure rules.
          </p>
        </a>

        <a
          href="driver-trips.html"
          className="block rounded-2xl border border-slate-200 p-5 hover:bg-slate-50"
        >
          <p className="text-sm text-slate-600">Driver</p>
          <p className="mt-1 font-semibold">
            View assigned trips and submit updates
          </p>
          <p className="mt-2 text-sm text-slate-600">
            Download PDF, update status, enter mileage and fuel.
          </p>
        </a>
      </div>
    </section>
  );
}
