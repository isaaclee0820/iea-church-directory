"use client";

import { useChurchStore } from "@/lib/store";

export default function MapControls() {
  const {
    selectedRegion,
    selectedDistrict,
    setSelectedRegion,
    setSelectedDistrict,
  } = useChurchStore();

  if (
    !selectedRegion &&
    !selectedDistrict
  ) {
    return null;
  }

  return (
    <div
      className="
        absolute
        top-4
        left-4
        z-[1000]
        bg-white
        rounded-lg
        shadow-md
        p-2
      "
    >
      {selectedDistrict && (
        <button
          className="
            block
            px-3
            py-2
            text-sm
            hover:bg-gray-100
          "
          onClick={() =>
            setSelectedDistrict(null)
          }
        >
          ← Back to districts
        </button>
      )}

      {selectedRegion &&
        !selectedDistrict && (
          <button
            className="
              block
              px-3
              py-2
              text-sm
              hover:bg-gray-100
            "
            onClick={() =>
              setSelectedRegion(null)
            }
          >
            ← Back to regions
          </button>
        )}

    </div>
  );
}