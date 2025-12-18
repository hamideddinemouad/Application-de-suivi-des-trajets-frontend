import { Car, Truck } from "lucide-react";
export default function Driver({name, date, email}) {
  return (
    <tr className="hover:bg-slate-50 transition">
      <td className="px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 ring-1 ring-slate-200">
            <Truck className="h-4 w-4 text-slate-600" />
          </div>

          <div>
            <p className="font-medium leading-tight">{name}</p>
            <p className="text-xs text-slate-400">{date}</p>

            <div className="mt-1 sm:hidden space-y-0.5">
              <p className="text-xs text-slate-500">{email}</p>
              <p className="text-xs text-slate-400">{date}</p>
            </div>
          </div>
        </div>
      </td>

      <td className="px-5 py-4 hidden sm:table-cell text-slate-600">
        {email}
      </td>

      <td className="px-5 py-4 hidden md:table-cell text-slate-600">
        {date}
      </td>

      <td className="px-5 py-4">
        <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-200">
          Active
        </span>
      </td>
    </tr>
  );
}
