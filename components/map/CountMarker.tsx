"use client";

import L, { DivIcon } from "leaflet";
import { Marker } from "react-leaflet";

interface Props {
  position: [number, number];
  label: string;
  count: number;
  selected?: boolean;
  onClick?: () => void;
}

export default function CountMarker({
  position,
  label,
  count,
  selected = false,
  onClick,
}: Props) {
  const icon = new DivIcon({
    className: "",
    html: `
      <div
        style="
          background:${selected ? "#2563eb" : "#ffffff"};
          color:${selected ? "#ffffff" : "#111827"};
          border:1px solid ${selected ? "#2563eb" : "#d1d5db"};
          border-radius:12px;
          box-shadow:0 4px 10px rgba(0,0,0,.15);
          min-width:74px;
          padding:8px 10px;
          text-align:center;
          font-family:Inter,Arial,sans-serif;
          cursor:pointer;
          user-select:none;
        "
      >
        <div
          style="
            font-size:20px;
            font-weight:700;
            line-height:1;
          "
        >
          ${count}
        </div>

        <div
          style="
            margin-top:4px;
            font-size:11px;
            font-weight:600;
            white-space:nowrap;
          "
        >
          ${label}
        </div>
      </div>
    `,
    iconSize: [74, 52],
    iconAnchor: [37, 26],
  });

  return (
    <Marker
      position={position}
      icon={icon}
      eventHandlers={{
        click: () => onClick?.(),
      }}
    />
  );
}