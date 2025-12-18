export default function TrucksDropDown({ trucks }) {
  return (
    <select
      name="truck"
      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm"
    >
      <option value="">Select truck</option>
      {trucks.map((truck, i) => (
        <option key={i} value={truck.plateNumber}>
          {truck.plateNumber}
        </option>
      ))}
    </select>
  );
}
