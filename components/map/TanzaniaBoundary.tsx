"use client";

import { useEffect, useState } from "react";
import { GeoJSON } from "react-leaflet";
import type { FeatureCollection } from "geojson";


export default function TanzaniaBoundary() {

  const [data, setData] =
    useState<FeatureCollection | null>(null);


  useEffect(() => {

    fetch("/maps/tanzania-regions.geojson")
      .then((response) => response.json())
      .then((json: FeatureCollection) => {
        setData(json);
      });

  }, []);



  if (!data) {
    return null;
  }



  return (

    <GeoJSON

      data={data}

      style={{
        color: "#94a3b8",
        weight: 1.2,
        fillColor: "#f8fafc",
        fillOpacity: 0.2,
      }}

    />

  );
}