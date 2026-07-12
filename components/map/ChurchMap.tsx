"use client";

import dynamic from "next/dynamic";

const MapClient = dynamic(
  () => import("./MapClient"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="mb-3 text-4xl">🗺️</div>
          <p className="text-gray-600">Loading map...</p>
        </div>
      </div>
    ),
  }
);

export default function ChurchMap() {
  return <MapClient />;
}