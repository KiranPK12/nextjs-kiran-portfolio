"use client";
import React, { createContext, useState, useContext } from "react";
import { links } from "@/lib/data";

type SectionName = (typeof links)[number]["name"];

type ActiveSelectionContextProviderProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSelection: SectionName;
  setActiveSelection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick:React.Dispatch<React.SetStateAction<number>>
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

export default function ActiveSelectionContextProvider({
  children,
}: ActiveSelectionContextProviderProps) {
  const [activeSelection, setActiveSelection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0);

  return (
    <ActiveSectionContext.Provider
      value={{ activeSelection, setActiveSelection, timeOfLastClick ,setTimeOfLastClick }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within a ActiveSectionContextprovider"
    );
  }

  return context;
}
