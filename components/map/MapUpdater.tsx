"use client";

import { useMap } from "react-leaflet";
import { useEffect } from "react";

import { useChurchStore } from "@/lib/store";

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
  MWANZA: [-2.52, 32.9],
  NJOMBE: [-9.33, 34.77],
  PWANI: [-7.0, 38.8],
  SHINYANGA: [-3.66, 33.42],
  SINGIDA: [-4.82, 34.74],
  SONGEA: [-10.68, 35.65],
  SONGWE: [-9.12, 32.93],
};

export default function MapUpdater() {
  const map = useMap();

  const {
    selectedRegion,
    selectedDistrict,
  } = useChurchStore();


  useEffect(() => {

    if (selectedDistrict) {

      return;

    }


    if (selectedRegion) {

      const position =
        regionLocations[selectedRegion.region];


      if (position) {

        map.flyTo(
          position,
          10,
          {
            duration: 1.2,
          }
        );

      }

      return;
    }


    map.flyTo(
      [-6.3, 34.8],
      6,
      {
        duration: 1.2,
      }
    );


  }, [
    selectedRegion,
    selectedDistrict,
    map
  ]);


  return null;
}