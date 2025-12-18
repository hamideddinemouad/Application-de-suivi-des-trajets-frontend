import { Outlet } from "react-router-dom";
import Kpi from "./components/Kpi";
import RecentTrips from "./components/RecentTrips";
import SideNav from "./components/SideNav";
import { useEffect, useState } from "react";
import axios from "axios";
// { totalTrucks, totalTrips, totalDrivers }
export default function Admin(){
    const [stats, setStats] = useState({});
    useEffect(() => {
        const fetchStats = async () => {
            const res = await axios.get("http://localhost:3000/api/dashboard/admin/stats", {
                withCredentials : true
            })
            setStats(res.data.message);
        }
        fetchStats();
    },[stats])
    // { totalTrucks, totalTrips, totalDrivers }
    return (
         <div className="bg-slate-100 text-slate-900">
            <div className="min-h-screen flex">
                <SideNav/>
                <main className="flex-1">

                    <div className="mx-auto max-w-6xl px-4 py-6 space-y-6">
                        <Kpi totalDrivers={stats.totalDrivers} totalTrucks={stats.totalTrucks} totalTrips={stats.totalTrips}/>
                        <Outlet />
                    </div>
                </main>
            </div>
         </div>
    )
}