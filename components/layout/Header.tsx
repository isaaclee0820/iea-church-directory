"use client";

import regions from "@/data/regions.json";
import districts from "@/data/districts.json";
import churches from "@/data/churches.json";

export default function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6">
      <div>
        <h1 className="text-xl font-bold text-gray-900">
          IEA Church Directory
        </h1>

        <p className="text-sm text-gray-500">
          International Evangelism Assemblies
        </p>
      </div>

      <div className="flex gap-8 text-center">
        <div>
          <div className="text-2xl font-bold text-blue-600">
            {regions.length}
          </div>
          <div className="text-xs uppercase tracking-wide text-gray-500">
            Regions
          </div>
        </div>

        <div>
          <div className="text-2xl font-bold text-green-600">
            {districts.length}
          </div>
          <div className="text-xs uppercase tracking-wide text-gray-500">
            Districts
          </div>
        </div>

        <div>
          <div className="text-2xl font-bold text-red-600">
            {churches.length}
          </div>
          <div className="text-xs uppercase tracking-wide text-gray-500">
            Churches
          </div>
        </div>
      </div>
    </header>
  );
}