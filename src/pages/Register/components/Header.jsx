export default function Header() {
  return (
    <div className="mb-8 text-center">
      <div className="mx-auto mb-4 h-12 w-12 rounded-2xl bg-white ring-1 ring-slate-200 flex items-center justify-center">
        <span className="text-xl font-bold">FC</span>
      </div>

      <h1 className="text-2xl font-semibold">Create your account</h1>
      <p className="mt-2 text-sm text-slate-600">
        Get started with FleetCo fleet management.
      </p>
    </div>
  );
}
