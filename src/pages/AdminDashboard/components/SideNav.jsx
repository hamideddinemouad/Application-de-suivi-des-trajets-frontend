import { useState } from "react";
import { Link, Navigate, NavLink } from "react-router-dom";

export default function SideNav() {
  // const [focus, setFocus] = useState({dashboard : "bg-slate-900"});
  // const handleClick= (element) => {
  //     setFocus({})
  // }
  const focused =
    "flex items-center gap-3 rounded-xl px-3 py-2 bg-slate-900 text-white";
  const notFocused = "flex items-center gap-3 rounded-xl px-3 py-2 text-black";
  return (
    <aside className="w-72 bg-white border-r border-slate-200 hidden md:flex flex-col">

      {/* flex items-center gap-3 rounded-xl px-3 py-2 bg-slate-900 text-white */}
      <nav className="p-4 space-y-1">
        <NavLink
          to="/admin"
          end
          className={({ isActive }) => (isActive ? focused : notFocused)}
        >
          <span className="text-sm font-medium">Dashboard</span>
        </NavLink>

        <NavLink
          to="/admin/addtruck/"
          className={({ isActive }) => (isActive ? focused : notFocused)}
        >
          <span className="text-sm font-medium">Trucks</span>
        </NavLink>

        <NavLink
          to="/admin/trips/"
          className={({ isActive }) => (isActive ? focused : notFocused)}
        >
          <span className="text-sm font-medium">Trips</span>
        </NavLink>
        <NavLink
          to="/admin/drivers/"
          className={({ isActive }) => (isActive ? focused : notFocused)}
        >
          <span className="text-sm font-medium">drivers</span>
        </NavLink>
      </nav>

      <div className="mt-auto p-4 border-t border-slate-200"></div>
    </aside>
  );
}
