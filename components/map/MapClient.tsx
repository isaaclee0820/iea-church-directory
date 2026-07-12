"use client";

import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import regions from "@/data/regions.json";

import { useChurchStore } from "@/lib/store";

import CountMarker from "./CountMarker";
import MapControls from "./MapControls";

const regionLocations: Record<string, [number, number]> = {
  ARUSHA: [-3.3869, 36.683],
  "DAR ES SALAAM": [-6.7924, 39.2083],
  DODOMA: [-6.163, 35.7516],
  GEITA: [-2.872, 32.232],
  IRINGA: [-7.77, 35.69],
  KAGERA: [-1.3, 31.5],
  KIGOMA: [-4.88, 29.63],
  KILIMANJARO: [-3.34, 37.34],
  MANYARA: [-4.3, 35.85],
  MARA: [-1.8, 34.7],
  MBEYA: [-8.9, 33.46],
  MOROGORO: [-6.82, 37.66],
  MTWARA: [-10.27, 40.18],
  MWANZA: [-2.52, 32.9],
  PWANI: [-7.0, 38.8],
  RUKWA: [-6.8, 31.0],
  RUVUMA: [-10.68, 35.65],
  SHINYANGA: [-3.66, 33.42],
  SINGIDA: [-4.82, 34.74],
};

export default function ChurchMap() {
  const {
    selectedRegion,
    setSelectedRegion,
  } = useChurchStore();

  return (
    <div className="relative h-full w-full">
      <MapControls />

      <MapContainer
        center={[-6.3, 34.8]}
        zoom={6}
        minZoom={6}
        className="h-full w-full"
      >
        <TileLayer
          attribution="© OpenStreetMap contributors"
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {regions.map((region) => {
          const position = regionLocations[region.region];

          if (!position) return null;

          return (
            <CountMarker
              key={region.region}
              position={position}
              label={region.region}
              count={region.churchCount}
              selected={
                selectedRegion?.region === region.region
              }
              onClick={() =>
                setSelectedRegion(region)
              }
            />
          );
        })}
      </MapContainer>
    </div>
  );
}