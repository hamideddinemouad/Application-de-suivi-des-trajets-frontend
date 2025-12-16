export default function Kpi() {
  return (
    <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div class="rounded-2xl bg-white border border-slate-200 p-5">
        <p class="text-sm text-slate-600">Available vehicles</p>
        <p class="mt-2 text-3xl font-semibold">12</p>
        <p class="mt-2 text-xs text-slate-500">Trucks + trailers ready</p>
      </div>

      <div class="rounded-2xl bg-white border border-slate-200 p-5">
        <p class="text-sm text-slate-600">Ongoing trips</p>
        <p class="mt-2 text-3xl font-semibold">4</p>
        <p class="mt-2 text-xs text-slate-500">Status: “In progress”</p>
      </div>

      <div class="rounded-2xl bg-white border border-slate-200 p-5">
        <p class="text-sm text-slate-600">Maintenance to plan</p>
        <p class="mt-2 text-3xl font-semibold">3</p>
        <p class="mt-2 text-xs text-slate-500">Tires / oil / inspection</p>
      </div>

      <div class="rounded-2xl bg-white border border-slate-200 p-5">
        <p class="text-sm text-slate-600">Fuel used (month)</p>
        <p class="mt-2 text-3xl font-semibold">8,450 L</p>
        <p class="mt-2 text-xs text-slate-500">Driver-entered data</p>
      </div>
    </section>
  );
}
