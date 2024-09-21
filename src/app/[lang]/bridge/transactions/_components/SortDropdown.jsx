"use client";

import { ChevronDown } from "lucide-react";

export default function SortDropdown({
  isOpen,
  setIsOpen,
  handleSelect,
  filter,
}) {
  return (
    <div className="relative w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-center px-3 py-2 rounded-md text-gray2 bg-ash"
      >
        <span className="text">{filter}</span>
        <ChevronDown size={20} />
      </button>
      {isOpen && (
        <div className="absolute bg-ash rounded-md border border-black top-11 w-full flex flex-col gap-1">
          <button
            onClick={() => handleSelect("High to Low")}
            className="px-3 py-2 hover:bg-coal"
          >
            <span className="text">High to Low</span>
          </button>
          <button
            onClick={() => handleSelect("Low to High")}
            className="px-3 py-2 hover:bg-coal"
          >
            <span className="text">Low to High</span>
          </button>
        </div>
      )}
    </div>
  );
}
