"use client";

import { create } from "zustand";

export interface Church {
  id: number;
  region: string;
  district: string;
  name: string;
  pastor?: string;
  contact?: string;
  city?: string;
  country?: string;
  serviceTime?: string;
  latitude?: number;
  longitude?: number;
  photo?: string;
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

  setSelectedRegion: (
    region: Region | null
  ) => void;

  setSelectedDistrict: (
    district: District | null
  ) => void;

  setSelectedChurch: (
    church: Church | null
  ) => void;
}

export const useChurchStore =
  create<ChurchStore>((set) => ({
    selectedRegion: null,
    selectedDistrict: null,
    selectedChurch: null,

    setSelectedRegion: (region) =>
      set({
        selectedRegion: region,
        selectedDistrict: null,
        selectedChurch: null,
      }),

    setSelectedDistrict: (district) =>
      set({
        selectedDistrict: district,
        selectedChurch: null,
      }),

    setSelectedChurch: (church) =>
      set({
        selectedChurch: church,
      }),
  }));