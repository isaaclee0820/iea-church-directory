"use client";

import { useMemo } from "react";

import churches from "@/data/churches.json";
import districts from "@/data/districts.json";
import regions from "@/data/regions.json";

import { useChurchStore } from "@/lib/store";

import SearchBar from "./SearchBar";

export default function Sidebar() {
  const {
    selectedRegion,
    selectedDistrict,
    setSelectedRegion,
    setSelectedDistrict,
    setSelectedChurch,
  } = useChurchStore();

  const visibleDistricts = useMemo(() => {
    if (!selectedRegion) return [];

    return districts.filter(
      (district) => district.region === selectedRegion.region
    );
  }, [selectedRegion]);

  const visibleChurches = useMemo(() => {
    if (!selectedDistrict) return [];

    return churches.filter(
      (church) =>
        church.region === selectedDistrict.region &&
        church.district === selectedDistrict.district
    );
  }, [selectedDistrict]);

  return (
    <div className="flex h-full flex-col">

      <div className="border-b border-gray-200 p-4">
        <SearchBar />
      </div>

      <div className="flex-1 overflow-y-auto">

        {/* Regions */}

        <section className="p-4">

          <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
            Regions
          </h2>

          <div className="space-y-2">

            {regions.map((region) => (

              <button
                key={region.region}
                onClick={() => setSelectedRegion(region)}
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left transition

                ${
                  selectedRegion?.region === region.region
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                <span>{region.region}</span>

                <span className="rounded-full bg-white/20 px-2 py-0.5 text-sm">
                  {region.churchCount}
                </span>
              </button>

            ))}

          </div>

        </section>

        {/* Districts */}

        {selectedRegion && (

          <section className="border-t border-gray-200 p-4">

            <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
              Districts
            </h2>

            <div className="space-y-2">

              {visibleDistricts.map((district) => (

                <button
                  key={district.district}
                  onClick={() => setSelectedDistrict(district)}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left transition

                  ${
                    selectedDistrict?.district === district.district
                      ? "bg-green-600 text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  <span>{district.district}</span>

                  <span className="rounded-full bg-white/20 px-2 py-0.5 text-sm">
                    {district.churchCount}
                  </span>
                </button>

              ))}

            </div>

          </section>

        )}

        {/* Churches */}

        {selectedDistrict && (

          <section className="border-t border-gray-200 p-4">

            <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
              Churches
            </h2>

            <div className="space-y-2">

              {visibleChurches.map((church) => (

                <button
                  key={church.id}
                  onClick={() => setSelectedChurch(church)}
                  className="w-full rounded-lg bg-gray-100 px-3 py-2 text-left transition hover:bg-blue-50"
                >
                  <div className="font-medium">
                    {church.name}
                  </div>

                  <div className="text-sm text-gray-500">
                    {church.pastor || "Pastor not available"}
                  </div>

                </button>

              ))}

            </div>

          </section>

        )}

      </div>

    </div>
  );
}