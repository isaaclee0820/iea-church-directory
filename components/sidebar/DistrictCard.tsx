"use client";

import { District } from "@/lib/store";

interface Props {
  district: District;
  onClick?: () => void;
}

export default function DistrictCard({
  district,
  onClick,
}: Props) {
  return (
    <div
      onClick={onClick}
      className="border rounded-lg p-4 cursor-pointer hover:bg-gray-50"
    >
      <h3 className="font-semibold text-lg">
        {district.district}
      </h3>

      <p className="text-sm text-gray-500">
        {district.region}
      </p>

      <p className="text-sm text-gray-600 mt-1">
        Churches: {district.churchCount}
      </p>
    </div>
  );
}