import axios from "axios";

export default function AddTruck() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const plate = formData.get("plateNumber");
    try {
      await axios.post(
        "http://localhost:3000/api/dashboard/admin/trucks/",
        { plateNumber: plate },
        {
          withCredentials: true,
        }
      );
    } catch (error) {
      console.log(error.response.data);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 space-y-6"
    >
      <section>
        <label className="block text-sm font-medium" htmlFor="plateNumber">
          License plate
        </label>
        <input
          id="plate"
          name="plateNumber"
          type="text"
          required
          className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
        />
        <p className="mt-2 text-xs text-slate-500">
          Enter the official registration number exactly as on the vehicle.
        </p>
      </section>

      <section>
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="submit"
            className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Save truck
          </button>
        </div>
      </section>
    </form>
  );
}
