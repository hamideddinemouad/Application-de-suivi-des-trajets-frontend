export default function Trip({id, origin, destination, driverName, plateNumber, createdAt}) {
    const date = new Date(createdAt);
  return (
    <tr>
      <td className="px-5 py-4 font-medium">{id}</td>
      <td className="px-5 py-4">{origin} → {destination}</td>
      <td className="px-5 py-4">{driverName}</td>
      <td className="px-5 py-4">{plateNumber}</td>
      <td className="px-5 py-4">
        <span className="inline-flex rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-900">
          In progress
        </span>
      </td>
    
      <td className="px-5 py-4">{date.toDateString()}</td>
      <td className="px-5 py-4"></td>
    </tr>
  );
}
