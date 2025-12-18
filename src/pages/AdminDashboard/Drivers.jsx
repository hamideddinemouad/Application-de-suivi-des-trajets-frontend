import axios from "axios";
import { useEffect, useState } from "react";
import { Car, Truck } from "lucide-react";
import Driver from "./components/Driver";
export default function Drivers() {
    const [drivers, setDrivers] = useState([]);
  useEffect(() => {
    const fetchDrivers = async () => {
      const drivers = await axios.get(
        "http://localhost:3000/api/dashboard/admin/drivers/",
        {
          withCredentials: true,
        }
      );
        setDrivers(drivers.data.message);
    //   console.log(drivers.data.message);
    };
    fetchDrivers();
  }, []);
  return (
    <div className="bg-slate-100 text-slate-900">
      <div className="min-h-screen">
        <main className="mx-auto max-w-6xl px-4 py-6">
          <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 text-left text-slate-600">
                <tr>
                  <th className="px-5 py-3">Driver</th>
                  <th className="px-5 py-3 hidden sm:table-cell">Email</th>
                  <th className="px-5 py-3 hidden md:table-cell">Joined At</th>
                  <th className="px-5 py-3">Status</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200">
                {drivers.map((driver, i) => (
                    <Driver key={i} name={driver.name} email={driver.email} date={driver.createdAt} />
                ))}
                
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </div>
  );
}
