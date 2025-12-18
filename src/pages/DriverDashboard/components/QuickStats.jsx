export default function QuickStats({ tripId, origin, destination, date }) {
  const startDateObj = new Date(date);

  const startdate = startDateObj.toDateString();
  const endDate = new Date(
    startDateObj.getTime() + 2 * 24 * 60 * 60 * 1000
  ).toDateString();

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-semibold">{tripId}</p>
            <p className="text-xs text-slate-500">
              {origin} → {destination}
            </p>
          </div>
          <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
            Active
          </span>
        </div>

        <div className="mt-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-slate-500">Pickup</span>
            <span>{startdate}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Drop-off</span>
            <span>{endDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
