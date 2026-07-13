"use client";

import { useMemo } from "react";

import churches from "@/data/churches.json";
import districts from "@/data/districts.json";
import regions from "@/data/regions.json";

import { useChurchStore } from "@/lib/store";

import SearchBar from "./SearchBar";


export default function Sidebar() {

  const {
    selectedRegion,
    selectedDistrict,
    selectedChurch,
    setSelectedRegion,
    setSelectedDistrict,
    setSelectedChurch,
  } = useChurchStore();



  const visibleDistricts = useMemo(() => {

    if (!selectedRegion) return [];

    return districts.filter(
      (d) => d.region === selectedRegion.region
    );

  }, [selectedRegion]);



  const visibleChurches = useMemo(() => {

    if (!selectedDistrict) return [];

    return churches.filter(
      (c) =>
        c.region === selectedDistrict.region &&
        c.district === selectedDistrict.district
    );

  }, [selectedDistrict]);



  return (

    <div className="flex h-full flex-col">

      <div className="border-b p-4">
        <SearchBar />
      </div>


      <div className="flex-1 overflow-y-auto p-4">


        <h2 className="mb-3 text-xs font-bold uppercase text-gray-500">
          Regions
        </h2>



        {regions.map((region)=>(


          <div key={region.region} className="mb-2">


            <button

              onClick={()=>{

                setSelectedRegion(region);
                setSelectedDistrict(null);
                setSelectedChurch(null);

              }}

              className={`flex w-full justify-between rounded-lg px-3 py-2

              ${
                selectedRegion?.region === region.region
                ? "bg-blue-600 text-white"
                : "bg-gray-100"
              }`}

            >

              <span>{region.region}</span>

              <span>{region.churchCount}</span>

            </button>





            {selectedRegion?.region === region.region && (


              <div className="ml-4 mt-2 border-l-2 border-blue-200 pl-3">


              {visibleDistricts.map((district)=>(


                <div key={district.district}>


                  <button

                    onClick={()=>{

                      setSelectedDistrict(district);
                      setSelectedChurch(null);

                    }}

                    className={`flex w-full justify-between rounded-lg px-3 py-2 text-sm

                    ${
                      selectedDistrict?.district === district.district
                      ? "bg-green-600 text-white"
                      : "bg-gray-50"
                    }`}

                  >

                    <span>
                      {district.district}
                    </span>

                    <span>
                      {district.churchCount}
                    </span>


                  </button>





                  {selectedDistrict?.district === district.district && (


                    <div className="ml-4 mt-2 border-l-2 border-green-200 pl-3">


                    {visibleChurches.map((church)=>(


                      <div key={church.id}>


                        <button

                          onClick={()=>setSelectedChurch(church)}

                          className="mb-2 w-full rounded-lg bg-gray-50 p-3 text-left hover:bg-blue-50"

                        >

                          <div className="font-medium">
                            {church.name}
                          </div>

                          <div className="text-xs text-gray-500">
                            {church.pastor}
                          </div>


                        </button>





                        {selectedChurch?.id === church.id && (


                          <div className="mb-3 rounded-lg border bg-white p-4 shadow-sm">


                            <h3 className="mb-3 text-lg font-bold">
                              Church Profile
                            </h3>


                            <div className="space-y-2 text-sm">


                              <div>
                                <b>Name:</b>
                                <br/>
                                {church.name}
                              </div>


                              <div>
                                <b>Pastor:</b>
                                <br/>
                                {church.pastor}
                              </div>


                              <div>
                                <b>Region:</b>
                                <br/>
                                {church.region}
                              </div>


                              <div>
                                <b>District:</b>
                                <br/>
                                {church.district}
                              </div>


                              <div className="mt-3 flex h-32 items-center justify-center rounded-lg border-dashed border-2 text-gray-400">

                                Photo Gallery

                              </div>


                            </div>


                          </div>


                        )}


                      </div>


                    ))}


                    </div>


                  )}



                </div>


              ))}


              </div>


            )}



          </div>


        ))}



      </div>


    </div>


  );

}