export default function RecentTrips() {
  return (
    <section className="rounded-2xl bg-white border border-slate-200 p-5">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold">Recent trips</h2>
        <a
          href="admin-trips.html"
          className="text-sm font-medium underline underline-offset-4"
        >
          View all
        </a>
      </div>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-left text-slate-600">
            <tr>
              <th className="py-2">Driver</th>
              <th className="py-2">Route</th>
              <th className="py-2">Status</th>
              <th className="py-2">Date</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-200">
            <tr>
              <td className="py-3 font-medium">TR-1042</td>
              <td className="py-3">A. El Idrissi</td>
              <td className="py-3">Casablanca → Tanger Med</td>
              <td className="py-3">
                <span className="inline-flex rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-900">
                  In progress
                </span>
              </td>
              <td className="py-3 text-slate-600">12/16/2025</td>
            </tr>

            <tr>
              <td className="py-3 font-medium">TR-1038</td>
              <td className="py-3">M. Benali</td>
              <td className="py-3">Rabat → Kenitra</td>
              <td className="py-3">
                <span className="inline-flex rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-900">
                  Completed
                </span>
              </td>
              <td className="py-3 text-slate-600">12/15/2025</td>
            </tr>

            <tr>
              <td className="py-3 font-medium">TR-1035</td>
              <td className="py-3">S. Amrani</td>
              <td className="py-3">Jorf Lasfar → Marrakech</td>
              <td className="py-3">
                <span className="inline-flex rounded-full bg-slate-200 px-2.5 py-1 text-xs font-semibold text-slate-800">
                  To do
                </span>
              </td>
              <td className="py-3 text-slate-600">12/15/2025</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
