import Header from "./components/Header";
import Kpi from "./components/Kpi";
import RecentTrips from "./components/RecentTrips";
import SideNav from "./components/SideNav";

export default function Admin(){
    return (
         <div class="bg-slate-100 text-slate-900">
            <div class="min-h-screen flex">
                <SideNav/>
                <main class="flex-1">
                    <Header/>
                    <div class="mx-auto max-w-6xl px-4 py-6 space-y-6">
                        <Kpi />
                        <RecentTrips />
                    </div>
                </main>
            </div>
         </div>
    )
}