import axios from "axios";
import QuickStats from "./components/QuickStats";
import { useEffect, useState } from "react";

export default function DriverDashboard() {
  const [asssignements, setAssignements] = useState([]);
  useEffect(() => {
    const fetchAssignements = async () =>{
      const res = await axios.get("http://localhost:3000/api/dashboard/driver/assignments", {
        withCredentials : true
      })
      setAssignements(res.data.message);
    }
    fetchAssignements();
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <main className="mx-auto max-w-5xl px-4 py-8 space-y-8">
     
        <section>
          <h1 className="text-2xl font-semibold">Good day 👋</h1>
          <p className="mt-1 text-slate-600">
            Here’s a quick overview of your assignments.
          </p>
        </section>

        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium">Assigned Trips</h2>
     
          </div>
          {/* tripId, origin, destination, date} */}
          {
            asssignements.length > 0 &&  
            asssignements.map((asssignement,i) => (
              <QuickStats key={i} tripId={asssignement._id} origin={asssignement.origin} destination={asssignement.destination} date={asssignement.createdAt}/>
            )) 
          }
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
