import { Outlet } from "react-router-dom";
import Kpi from "./components/Kpi";
import RecentTrips from "./components/RecentTrips";
import SideNav from "./components/SideNav";

export default function Admin(){
    return (
         <div className="bg-slate-100 text-slate-900">
            <div className="min-h-screen flex">
                <SideNav/>
                <main className="flex-1">
                    <div className="mx-auto max-w-6xl px-4 py-6 space-y-6">
                        <Outlet />
                    </div>
                </main>
            </div>
         </div>
    )
}