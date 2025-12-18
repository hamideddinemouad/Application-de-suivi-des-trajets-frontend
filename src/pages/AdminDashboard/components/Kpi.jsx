export default function Kpi() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="rounded-2xl bg-white border border-slate-200 p-5">
        <p className="text-sm text-slate-600">Available vehicles</p>
        <p className="mt-2 text-3xl font-semibold">12</p>
        <p className="mt-2 text-xs text-slate-500">Trucks</p>
      </div>

      <div className="rounded-2xl bg-white border border-slate-200 p-5">
        <p className="text-sm text-slate-600">Ongoing trips</p>
        <p className="mt-2 text-3xl font-semibold">4</p>
        <p className="mt-2 text-xs text-slate-500">Status: “In progress”</p>
      </div>
    </section>
  );
}
