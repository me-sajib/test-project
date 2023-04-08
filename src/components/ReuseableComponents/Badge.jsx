

export default function Badge({status}) {
  return (
    <span
      className={
        status === "Sale"
          ? "bg-red-200 text-red-700 p-1 rounded font-medium"
          : "bg-gray-200 text-gray-700 p-1 rounded font-medium"
      }
    >
      {status}
    </span>
  );
}
