export default function DriversDropDown({drivers}) {
    // console.log(drivers);
  return (
    <select
      name="driver"
      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm"
    >
      <option value="">Select driver</option>
      {drivers.map((driver, i) => (
        <option key={i} value={driver.name}>{driver.name}</option>
      ))}
      
    </select>
  );
}
