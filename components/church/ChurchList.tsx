"use client";

import churches from "@/data/churches.json";

import ChurchCard from "@/components/sidebar/ChurchCard";

import { useChurchStore } from "@/lib/store";

export default function ChurchList() {
  const {
    selectedRegion,
    selectedDistrict,
  } = useChurchStore();

  const filteredChurches = churches.filter((church) => {
    if (
      selectedDistrict &&
      church.district !== selectedDistrict.district
    ) {
      return false;
    }

    if (
      selectedRegion &&
      church.region !== selectedRegion.region
    ) {
      return false;
    }

    return true;
  });

  if (filteredChurches.length === 0) {
    return (
      <div className="p-8 text-center text-gray-500">
        No churches found.
      </div>
    );
  }

  return (
    <div className="divide-y divide-gray-100">
      {filteredChurches.map((church) => (
        <ChurchCard
          key={church.id}
          church={church}
        />
      ))}
    </div>
  );
}