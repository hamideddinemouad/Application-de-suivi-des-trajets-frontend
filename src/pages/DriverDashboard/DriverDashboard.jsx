

export default function DriverDashboard() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">

      <main className="mx-auto max-w-5xl px-4 py-8 space-y-6">
        <section>
          <h1 className="text-2xl font-semibold">Good day 👋</h1>
          <p className="mt-1 text-slate-600">
            Here’s a quick overview of your assignments.
          </p>
        </section>
      </main>
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-5 text-center text-xs text-slate-500">
          © FleetCo Logistics
        </div>
      </footer>
    </div>
  );
}
