// components/church/ChurchList.tsx

"use client";

import { useMemo } from "react";
import { useStore } from "@/lib/store";
import ChurchCard from "@/components/sidebar/ChurchCard";

export default function ChurchList() {
  const churches = useStore((state) => state.filteredChurches);
  const search = useStore((state) => state.search);

  const results = useMemo(() => {
    if (!search.trim()) return churches;

    const keyword = search.toLowerCase();

    return churches.filter((church: any) => {
      return (
        church.name?.toLowerCase().includes(keyword) ||
        church.pastor?.toLowerCase().includes(keyword) ||
        church.district?.toLowerCase().includes(keyword) ||
        church.region?.toLowerCase().includes(keyword) ||
        church.country?.toLowerCase().includes(keyword)
      );
    });
  }, [churches, search]);

  if (results.length === 0) {
    return (
      <div className="p-8 text-center text-gray-500">
        No churches found.
      </div>
    );
  }

  return (
    <div className="divide-y divide-gray-100">
      {results.map((church: any) => (
        <ChurchCard
          key={church.id}
          church={church}
        />
      ))}
    </div>
  );
}