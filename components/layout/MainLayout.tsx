"use client";

import Header from "./Header";
import Sidebar from "../sidebar/Sidebar";
import ChurchMap from "../map/ChurchMap";

export default function MainLayout() {

  return (

    <div className="flex h-screen flex-col bg-gray-100">


      <Header />


      <div className="flex flex-1 overflow-hidden">


        {/* Sidebar */}

        <aside className="w-[420px] border-r border-gray-200 bg-white">

          <Sidebar />

        </aside>




        {/* Map */}

        <main className="flex-1 bg-gray-50">

          <ChurchMap />

        </main>



      </div>


    </div>

  );

}