"use client";

import { create } from "zustand";


export interface Church {

  id: number;

  region: string;

  district: string;

  name: string;


  // Pastor information

  pastor?: string;

  pastorPhone?: string;

  pastorEmail?: string;


  // Church information

  contact?: string;

  city?: string;

  country?: string;

  address?: string;

  serviceTime?: string;


  // Media

  photo?: string;

  photos?: string[];


  // Future login system

  pastorId?: string;

  pastorUsername?: string;


  // Map coordinates

  latitude?: number;

  longitude?: number;

}



export interface Region {

  region: string;

  churchCount: number;

}



export interface District {

  region: string;

  district: string;

  churchCount: number;

}



interface ChurchStore {

  selectedRegion: Region | null;

  selectedDistrict: District | null;

  selectedChurch: Church | null;



  setSelectedRegion:
    (region: Region | null) => void;



  setSelectedDistrict:
    (district: District | null) => void;



  setSelectedChurch:
    (church: Church | null) => void;



  updateChurch:
    (church: Church) => void;

}



export const useChurchStore =
create<ChurchStore>((set)=>({


  selectedRegion:null,

  selectedDistrict:null,

  selectedChurch:null,



  setSelectedRegion:(region)=>
    set({

      selectedRegion:region,

      selectedDistrict:null,

      selectedChurch:null,

    }),



  setSelectedDistrict:(district)=>
    set({

      selectedDistrict:district,

      selectedChurch:null,

    }),



  setSelectedChurch:(church)=>
    set({

      selectedChurch:church,

    }),



  updateChurch:(church)=>
    set({

      selectedChurch:church,

    }),


}));