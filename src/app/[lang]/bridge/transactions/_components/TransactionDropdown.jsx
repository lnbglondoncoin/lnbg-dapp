"use client";

import { ChevronDown } from "lucide-react";

export default function TransactionDropdown({
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
            onClick={() => handleSelect("All Transactions")}
            className="px-3 py-2 hover:bg-coal"
          >
            <span className="text">All Transactions</span>
          </button>
          <button
            onClick={() => handleSelect("Completed")}
            className="px-3 py-2 hover:bg-coal"
          >
            <span className="text">Completed</span>
          </button>
          <button
            onClick={() => handleSelect("Pending")}
            className="px-3 py-2 hover:bg-coal"
          >
            <span className="text">Pending</span>
          </button>
        </div>
      )}
    </div>
  );
}
