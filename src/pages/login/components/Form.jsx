export default function Form() {
  return (
    <form className="p-6 sm:p-8" action="#" method="post">
      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium" for="email">
            Email
          </label>
          <input
            className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
            id="email"
            name="email"
            type="email"
            placeholder="you@fleetco.com"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium" for="password">
            Password
          </label>
          <input
            className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
            id="password"
            name="password"
            type="password"
            placeholder="••••••••"
            required
          />
        </div>

        <button
          className="w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400"
          type="submit"
        >
          Sign in
        </button>
      </div>
    </form>
  );
}
