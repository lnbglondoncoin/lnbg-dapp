"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function DateFilterDropdown({
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
        <span className="text">Last {filter} day</span>
        <ChevronDown size={20} />
      </button>
      {isOpen && (
        <div className="absolute bg-ash rounded-md border border-black top-11 w-full flex flex-col gap-1">
          <button
            onClick={() => handleSelect(1)}
            className="px-3 py-2 hover:bg-coal"
          >
            <span className="text">Last 1 day</span>
          </button>
          <button
            onClick={() => handleSelect(7)}
            className="px-3 py-2 hover:bg-coal"
          >
            <span className="text">Last 7 days</span>
          </button>
          <button
            onClick={() => handleSelect(30)}
            className="px-3 py-2 hover:bg-coal"
          >
            <span className="text">Last 30 days</span>
          </button>
          <button
            onClick={() => handleSelect(90)}
            className="px-3 py-2 hover:bg-coal"
          >
            <span className="text">Last 90 days</span>
          </button>
        </div>
      )}
    </div>
  );
}
