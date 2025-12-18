import AddTruck from "./components/AddTruck"
import AdminTrucksTable from "./components/AdminTrucksTable"

export default function Trucks() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">

      <div>
        <h1 className="text-xl font-semibold">Trucks</h1>
        <p className="text-sm text-slate-600">
          Add and manage trucks using license plates.
        </p>
      </div>
      <AddTruck />
      <AdminTrucksTable />
    </div>
  )
}
