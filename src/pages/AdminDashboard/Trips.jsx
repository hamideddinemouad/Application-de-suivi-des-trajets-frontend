import { useEffect, useState } from "react";
import AddTrip from "./components/addTrip";
import Trip from "./components/Trip";
import axios from "axios";

export default function Trips() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const fetchTrips = async () => {
      const trips = await axios.get(
        "http://localhost:3000/api/dashboard/admin/trip/",
        {
          withCredentials: true,
        }
      );
      //   console.log(trips.data.message);
      setTrips(trips.data.message);
    };
    fetchTrips();
  }, []);

  return (
    <div className="bg-slate-100 text-slate-900">
      <div className="min-h-screen">
        <main className="mx-auto max-w-6xl px-4 py-6 space-y-4">
          <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="text-left text-slate-600 bg-slate-50">
                  <tr>
                    <th className="px-5 py-3">Ref</th>
                    <th className="px-5 py-3">Route</th>
                    <th className="px-5 py-3">Driver</th>
                    <th className="px-5 py-3">Vehicle</th>
                    <th className="px-5 py-3">Status</th>
                    <th className="px-5 py-3">created at</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {/* id, origin, destination, driverName, plateNumber, createdAt */}
                  {trips.map((trip, i) => (
                    <Trip
                      key={i}
                      id={trip._id}
                      origin={trip.origin}
                      destination={trip.destination}
                      driverName={trip.driver}
                      plateNumber={trip.truck}
                      createdAt={trip.createdAt}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <AddTrip />
        </main>
      </div>
    </div>
  );
}
