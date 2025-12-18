import AddTrip from "./components/addTrip";

export default function Trips() {
  return (
    <div className="bg-slate-100 text-slate-900">
      <div className="min-h-screen">
        <main className="mx-auto max-w-6xl px-4 py-6 space-y-4">
          <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="text-left text-slate-600 bg-slate-50">
                  <tr>
                    <th className="px-5 py-3">Ref</th>
                    <th className="px-5 py-3">Route</th>
                    <th className="px-5 py-3">Driver</th>
                    <th className="px-5 py-3">Vehicle</th>
                    <th className="px-5 py-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">

                </tbody>
              </table>
            </div>
          </div>
          <AddTrip/>
        </main>
      </div>
    </div>
  );
}
