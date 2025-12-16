export default function QuickStats() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="rounded-2xl bg-white border border-slate-200 p-5">
        <p className="text-sm text-slate-600">Assigned trips</p>
        <p className="mt-2 text-3xl font-semibold">3</p>
      </div>

      <div className="rounded-2xl bg-white border border-slate-200 p-5">
        <p className="text-sm text-slate-600">In progress</p>
        <p className="mt-2 text-3xl font-semibold">1</p>
      </div>

      <div className="rounded-2xl bg-white border border-slate-200 p-5">
        <p className="text-sm text-slate-600">Completed (month)</p>
        <p className="mt-2 text-3xl font-semibold">7</p>
      </div>
    </section>
  );
}
