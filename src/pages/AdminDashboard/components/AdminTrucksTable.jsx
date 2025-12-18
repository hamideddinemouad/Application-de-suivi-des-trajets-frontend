import axios from "axios";
import { useEffect, useState } from "react";

export default function AdminTrucksTable() {
  const [trucks, setTrucks] = useState([]);

  useEffect(() => {
    const fetchTrucks = async () => {
      const res = await axios.get(
        "http://localhost:3000/api/dashboard/admin/trucks/",
        { withCredentials: true }
      );
      setTrucks(res.data.message);
    };
    fetchTrucks();
  }, []);

  return (
    <section className="rounded-2xl bg-white border border-slate-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-left text-slate-600 bg-slate-50">
            <tr>
              <th className="px-5 py-3">Trucks</th>
            </tr>
          </thead>
          {/* {console.log(trucks)} */}
          <tbody className="divide-y divide-slate-200">
            {trucks.map((truck) => {
              return (
                <tr>
                  <td className="px-5 py-4 font-medium">{truck.plateNumber}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
