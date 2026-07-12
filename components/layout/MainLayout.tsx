"use client";

import Header from "./Header";
import Sidebar from "../sidebar/Sidebar";
import ChurchMap from "../map/ChurchMap";
import ChurchProfile from "../church/ChurchProfile";

export default function MainLayout() {
  return (
    <div className="flex h-screen flex-col bg-gray-100">
      <Header />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-80 border-r border-gray-200 bg-white">
          <Sidebar />
        </aside>

        {/* Map */}
        <main className="flex-1 bg-gray-50">
          <ChurchMap />
        </main>

        {/* Details */}
        <aside className="w-96 border-l border-gray-200 bg-white">
          <ChurchProfile />
        </aside>
      </div>
    </div>
  );
}