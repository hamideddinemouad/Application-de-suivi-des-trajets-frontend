import { useEffect, useState } from "react";
import DriversDropDown from "./DriversDropDown";
import TrucksDropDown from "./TrucksDropDown";
import axios from "axios";

export default function AddTrip() {
  const [drivers, setDrivers] = useState([]);
  const [trucks, setTrucks] = useState([]);
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // FormData(4) { driver → "dwdwwd", truck → "new", origin → "fefe", destination → "efefq" }
    const driver = formData.get("driver");
    const truck = formData.get("truck");
    const origin = formData.get("origin");
    const destination = formData.get("destination");
    const data = {driver : driver, truck : truck, origin : origin, destination : destination};
    const res = await axios.post(
      "http://localhost:3000/api/dashboard/admin/trips/", data,
      { withCredentials: true }
    );
  };
  return (
    <div className="bg-slate-100 text-slate-900">
      <div className="min-h-screen">
        <header className="bg-white border-b border-slate-200">
          <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
            <div>
              <h1 className="text-lg font-semibold">Create trip</h1>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-4 py-6">
          <section className="rounded-2xl bg-white border border-slate-200 p-4 md:p-6 max-w-2xl">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-slate-900 mb-2">
                  Driver
                </label>
                <DriversDropDown drivers={drivers} />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-900 mb-2">
                  Truck
                </label>
                <TrucksDropDown trucks={trucks} />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-900 mb-2">
                  Origin
                </label>
                <input
                  name="origin"
                  type="text"
                  placeholder="City / address"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-900 mb-2">
                  Destination
                </label>
                <input
                  name="destination"
                  type="text"
                  placeholder="City / address"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm"
                />
              </div>

              <div className="pt-2 flex items-center gap-2">
                <button
                  type="submit"
                  className="rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  Create trip
                </button>
                <button
                  type="reset"
                  className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                >
                  Clear
                </button>
              </div>
            </form>
          </section>
        </main>
      </div>
    </div>
  );
}
