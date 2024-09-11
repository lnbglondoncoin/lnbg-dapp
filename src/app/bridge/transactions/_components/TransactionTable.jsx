"use client";

import { Eye, Search } from "lucide-react";
import TransactionDropdown from "./TransactionDropdown";
import { useState } from "react";
import DateFilterDropdown from "./DateFilterDropdown";
import SortDropdown from "./SortDropdown";

export default function TransactionTable() {
  const dummyTransactions = [
    {
      token: "$LNBG",
      amount: "0.0001",
      account: "0x1234...7890",
      status: "Completed",
      type: "Mint",
    },
    {
      token: "$LNBG",
      amount: "0.0001",
      account: "0x1234...7890",
      status: "Pending",
      type: "Burn",
    },
    {
      token: "$LNBG",
      amount: "0.0001",
      account: "0x1234...7890",
      status: "Completed",
      type: "Mint",
    },
  ];

  const [isTransactionFilterOpen, setIsTransactionFilterOpen] = useState(false);
  const [isDateFilterOpen, setIsDateFilterOpen] = useState(false);
  const [isSortFilterOpen, setIsSortFilterOpen] = useState(false);

  const [sortFilter, setSortFilter] = useState("High to Low");
  const [dateFilter, setDateFilter] = useState(1);
  const [filter, setFilter] = useState("All Transactions");

  const handleSelectFilter = (value) => {
    setFilter(value);
    setIsTransactionFilterOpen(false);
  };

  const handleSelectDate = (value) => {
    setDateFilter(value);
    setIsDateFilterOpen(false);
  };

  const handleSortFilter = (value) => {
    setSortFilter(value);
    setIsSortFilterOpen(false);
  };
  return (
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-2 gap-3">
        <div className="flex items-center justify-center gap-2 p-2 bg-ash rounded-md w-72">
          <Search size={20} />
          <input
            className="bg-transparent w-full focus:outline-none border-none outline-none"
            type="search"
            name="search"
            id="search"
            placeholder="Search: Address, Txn Hash"
          />
        </div>
        <div className="grid grid-cols-3 gap-2">
          <TransactionDropdown
            isOpen={isTransactionFilterOpen}
            setIsOpen={setIsTransactionFilterOpen}
            filter={filter}
            handleSelect={handleSelectFilter}
          />
          <DateFilterDropdown
            isOpen={isDateFilterOpen}
            setIsOpen={setIsDateFilterOpen}
            filter={dateFilter}
            handleSelect={handleSelectDate}
          />
          <SortDropdown
            isOpen={isSortFilterOpen}
            setIsOpen={setIsSortFilterOpen}
            filter={sortFilter}
            handleSelect={handleSortFilter}
          />
        </div>
      </div>
      <table class="table-auto">
        <thead>
          <tr className="bg-ash">
            <th className="text-start font-semibold pl-6 py-2 uppercase">
              Token
            </th>
            <th className="text-start font-semibold py-2 uppercase">Amount</th>
            <th className="text-start font-semibold py-2 uppercase">Account</th>
            <th className="text-start font-semibold py-2 uppercase">Status</th>
            <th className="text-start font-semibold py-2 uppercase">Type</th>
            <th className="text-start font-semibold py-2 uppercase">View</th>
          </tr>
        </thead>
        <tbody>
          {dummyTransactions.map((transaction, index) => (
            <tr className="border-b border-ash" key={index}>
              <td className="py-3 pl-6">{transaction.token}</td>
              <td className="py-3">{transaction.amount}</td>
              <td className="py-3">{transaction.account}</td>
              <td className="py-3">{transaction.status}</td>
              <td className="py-3">{transaction.type}</td>
              <td className="py-3">
                <button className="text-primary2">
                  <Eye size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
