"use client";

export default function SearchBar() {
  return (
    <div className="w-full">
      <input
        type="text"
        placeholder="Search..."
        className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none transition focus:border-blue-500"
      />
    </div>
  );
}