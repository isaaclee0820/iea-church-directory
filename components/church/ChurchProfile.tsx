"use client";

import { useChurchStore } from "@/lib/store";

export default function ChurchProfile() {
  const { selectedChurch } = useChurchStore();

  if (!selectedChurch) {
    return (
      <div className="flex h-full items-center justify-center p-8">
        <div className="max-w-sm text-center">
          <div className="mb-4 text-6xl">⛪</div>

          <h2 className="mb-2 text-xl font-semibold text-gray-800">
            Church Profile
          </h2>

          <p className="text-gray-500">
            Select a church from the sidebar to view its profile.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto">

      {/* Header */}

      <div className="border-b border-gray-200 bg-blue-600 p-6 text-white">

        <h2 className="text-2xl font-bold">
          {selectedChurch.name}
        </h2>

        <p className="mt-1 text-blue-100">
          International Evangelism Assemblies
        </p>

      </div>

      {/* Content */}

      <div className="space-y-6 p-6">

        <Section
          title="Pastor"
          value={selectedChurch.pastor}
        />

        <Section
          title="Region"
          value={selectedChurch.region}
        />

        <Section
          title="District"
          value={selectedChurch.district}
        />

        <Section
          title="Contact"
          value={selectedChurch.contact}
        />

        <Section
          title="Service Time"
          value={selectedChurch.serviceTime}
        />

        <Section
          title="City"
          value={selectedChurch.city}
        />

        <Section
          title="Country"
          value={selectedChurch.country}
        />

        <div>
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
            Photos
          </h3>

          <div className="flex h-48 items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50">
            <p className="text-gray-400">
              No photos uploaded
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}

interface SectionProps {
  title: string;
  value?: string;
}

function Section({ title, value }: SectionProps) {
  return (
    <div>

      <h3 className="mb-1 text-sm font-semibold uppercase tracking-wide text-gray-500">
        {title}
      </h3>

      <div className="rounded-lg border border-gray-200 bg-white p-4">
        {value || (
          <span className="text-gray-400">
            Not available
          </span>
        )}
      </div>

    </div>
  );
}