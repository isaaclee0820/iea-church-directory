"use client";

import { Church } from "@/lib/store";

interface Props {
  church: Church;
  onClick?: () => void;
  onBack?: () => void;
}

export default function ChurchCard({
  church,
  onClick,
  onBack,
}: Props) {
  return (
    <div
      onClick={onClick}
      className="border rounded-lg p-4 cursor-pointer hover:bg-gray-50"
    >
      {onBack && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onBack();
          }}
          className="text-sm text-blue-600 mb-3"
        >
          ← Back
        </button>
      )}

      <h3 className="font-bold text-lg">
        {church.name}
      </h3>

      <div className="mt-3 text-sm text-gray-600 space-y-1">
        <p>
          <strong>Region:</strong>{" "}
          {church.region}
        </p>

        <p>
          <strong>District:</strong>{" "}
          {church.district}
        </p>

        {church.pastor && (
          <p>
            <strong>Pastor:</strong>{" "}
            {church.pastor}
          </p>
        )}

        {church.contact && (
          <p>
            <strong>Contact:</strong>{" "}
            {church.contact}
          </p>
        )}

        {church.serviceTime && (
          <p>
            <strong>Service:</strong>{" "}
            {church.serviceTime}
          </p>
        )}
      </div>

      <div className="mt-4 border-t pt-3 text-sm text-gray-400">
        Church profile coming soon
      </div>
    </div>
  );
}