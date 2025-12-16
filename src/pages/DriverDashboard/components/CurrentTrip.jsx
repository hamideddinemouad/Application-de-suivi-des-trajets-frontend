export default function CurrentTrip() {
  return (
    <section className="rounded-2xl bg-white border border-slate-200 p-6">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm text-slate-600">Current trip</p>
          <h2 className="mt-1 text-lg font-semibold">Casablanca → Tanger Med</h2>
          <p className="mt-1 text-sm text-slate-600">Vehicle: T-014 + R-022</p>
        </div>

        <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-900">
          In progress
        </span>
      </div>

      <div className="mt-4 flex flex-col sm:flex-row gap-3">
        {/* <a
          href="driver-trip-detail.html"
          className="inline-flex justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
        >
          Open trip
        </a>

        <a
          href="driver-trip-detail.html"
          className="inline-flex justify-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold hover:bg-slate-50"
        >
          Update status
        </a> */}
      </div>
    </section>
  );
}
