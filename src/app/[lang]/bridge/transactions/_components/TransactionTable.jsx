// "use client";
// import { Eye, Search } from "lucide-react";
// import TransactionDropdown from "./TransactionDropdown";
// import { useState } from "react";
// import DateFilterDropdown from "./DateFilterDropdown";
// import SortDropdown from "./SortDropdown";

// export default function TransactionTable() {
//   const dummyTransactions = [
//     {
//       token: "$LNBG",
//       amount: "0.0001",
//       account: "0x1234...7890",
//       status: "Completed",
//       type: "Mint",
//     },
//     {
//       token: "$LNBG",
//       amount: "0.0001",
//       account: "0x1234...7890",
//       status: "Pending",
//       type: "Burn",
//     },
//     {
//       token: "$LNBG",
//       amount: "0.0001",
//       account: "0x1234...7890",
//       status: "Completed",
//       type: "Mint",
//     },
//   ];

//   const [isTransactionFilterOpen, setIsTransactionFilterOpen] = useState(false);
//   const [isDateFilterOpen, setIsDateFilterOpen] = useState(false);
//   const [isSortFilterOpen, setIsSortFilterOpen] = useState(false);

//   const [sortFilter, setSortFilter] = useState("High to Low");
//   const [dateFilter, setDateFilter] = useState(1);
//   const [filter, setFilter] = useState("All Transactions");

//   const handleSelectFilter = (value) => {
//     setFilter(value);
//     setIsTransactionFilterOpen(false);
//   };

//   const handleSelectDate = (value) => {
//     setDateFilter(value);
//     setIsDateFilterOpen(false);
//   };

//   const handleSortFilter = (value) => {
//     setSortFilter(value);
//     setIsSortFilterOpen(false);
//   };
//   return (
//     <div className="flex flex-col gap-3">
//       <div className="grid grid-cols-2 gap-3">
//         <div className="flex items-center justify-center gap-2 p-2 bg-ash rounded-md w-72">
//           <Search size={20} />
//           <input
//             className="bg-transparent w-full focus:outline-none border-none outline-none"
//             type="search"
//             name="search"
//             id="search"
//             placeholder="Search: Address, Txn Hash"
//           />
//         </div>
//         <div className="grid grid-cols-3 gap-2">
//           <TransactionDropdown
//             isOpen={isTransactionFilterOpen}
//             setIsOpen={setIsTransactionFilterOpen}
//             filter={filter}
//             handleSelect={handleSelectFilter}
//           />
//           <DateFilterDropdown
//             isOpen={isDateFilterOpen}
//             setIsOpen={setIsDateFilterOpen}
//             filter={dateFilter}
//             handleSelect={handleSelectDate}
//           />
//           <SortDropdown
//             isOpen={isSortFilterOpen}
//             setIsOpen={setIsSortFilterOpen}
//             filter={sortFilter}
//             handleSelect={handleSortFilter}
//           />
//         </div>
//       </div>
//       <table class="table-auto">
//         <thead>
//           <tr className="bg-ash">
//             <th className="text-start font-semibold pl-6 py-2 uppercase">
//               Token
//             </th>
//             <th className="text-start font-semibold py-2 uppercase">Amount</th>
//             <th className="text-start font-semibold py-2 uppercase">Account</th>
//             <th className="text-start font-semibold py-2 uppercase">Status</th>
//             <th className="text-start font-semibold py-2 uppercase">Type</th>
//             <th className="text-start font-semibold py-2 uppercase">View</th>
//           </tr>
//         </thead>
//         <tbody>
//           {dummyTransactions.map((transaction, index) => (
//             <tr className="border-b border-ash" key={index}>
//               <td className="py-3 pl-6">{transaction.token}</td>
//               <td className="py-3">{transaction.amount}</td>
//               <td className="py-3">{transaction.account}</td>
//               <td className="py-3">{transaction.status}</td>
//               <td className="py-3">{transaction.type}</td>
//               <td className="py-3">
//                 <button className="text-primary2">
//                   <Eye size={20} />
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

"use client";
import { Eye, Search } from "lucide-react";
import { useState, useEffect } from "react";
import TransactionDropdown from "./TransactionDropdown";
import DateFilterDropdown from "./DateFilterDropdown";
import SortDropdown from "./SortDropdown";
import apis from "@/context/Services/apis";
import { ethers } from "ethers";

export default function TransactionTable() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isTransactionFilterOpen, setIsTransactionFilterOpen] = useState(false);
  const [isDateFilterOpen, setIsDateFilterOpen] = useState(false);
  const [isSortFilterOpen, setIsSortFilterOpen] = useState(false);

  const [sortFilter, setSortFilter] = useState("High to Low");
  const [dateFilter, setDateFilter] = useState(1);
  const [filter, setFilter] = useState("All Transactions");

  const [searchQuery, setSearchQuery] = useState("");

  // Fetch all transactions on component mount
  const fetchTransactions = async () => {
    try {
      let response;
      if (filter === "Completed") {
        response = await apis.viewCompleteTransactions();
      } else if (filter === "Pending") {
        response = await apis.viewPendingTransactions();
      } else {
        response = await apis.viewAllTransactions();
      }
      setTransactions(response?.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, [filter]);

  // Handle sort and date filters using API call
  useEffect(() => {
    const fetchSortedTransactions = async () => {
      try {
        const response = await apis.viewTransactionsByLastTime(
          sortFilter,
          dateFilter
        );
        setTransactions(response.data);
      } catch (err) {
        setError(err.message);
      }
    };

    if (filter !== "All Transactions") {
      fetchSortedTransactions();
    }
  }, [sortFilter, dateFilter]);

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

  const ViewTransaction = (hash, network) => {
    let url;
    switch (network) {
      case "eth":
        url = `https://etherscan.io/tx/${hash}`;
        break;
      case "poly":
        url = `https://polygonscan.com/tx/${hash}`;
        break;
      default:
        url = `https://bscscan.com/tx/${hash}`;
    }
    window.open(url, "_blank");
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    const searchItems = async () => {
      if (searchQuery.length > 0) {
        const filteredData = transactions?.filter((item) =>
          item?.to?.toLowerCase()?.includes(searchQuery?.toLowerCase())
        );
        setTransactions(filteredData.length > 0 ? filteredData : []);
      } else {
        fetchTransactions();
      }
    };
    searchItems();
  }, [searchQuery]);

  useEffect(() => {
    const sortItems = () => {
      let sortedData = [...transactions];
      if (sortFilter === "Low to High") {
        sortedData.sort(
          (a, b) => Number(BigInt(a?.amount)) - Number(BigInt(b?.amount))
        );
      } else if (sortFilter === "High to Low") {
        sortedData.sort(
          (a, b) => Number(BigInt(b?.amount)) - Number(BigInt(a?.amount))
        );
      }
      setTransactions(sortedData);
    };
    sortItems();
  }, [sortFilter]);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;

  console.log(transactions, "transactionstransactions");

  return (
    <div className="flex flex-col gap-3 w-full">
      {transactions && (
        <div className="w-full overflow-auto">
          {transactions?.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 gap-2">
                <div className="flex items-center justify-center gap-2 p-2 bg-ash rounded-md w-full md:w-72">
                  <Search size={20} />
                  <input
                    className="bg-transparent w-full focus:outline-none border-none outline-none"
                    type="search"
                    name="search"
                    id="search"
                    placeholder="Search Transaction ..."
                    onChange={handleSearchInputChange}
                  />
                </div>
                <div className="grid sm:grid-cols-3 gap-2">
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
              <table className="table-auto w-full">
                <thead>
                  <tr className="bg-ash">
                    <th className="text-start font-semibold px-4 uppercase">
                      Hash
                    </th>
                    <th className="text-start font-semibold py-2 pr-4 uppercase">
                      Network
                    </th>
                    <th className="text-start font-semibold py-2 pr-4 uppercase">
                      Amount
                    </th>
                    <th className="text-start font-semibold py-2 pr-4 uppercase">
                      Status
                    </th>
                    <th className="text-start font-semibold py-2 pr-4 uppercase">
                      Time
                    </th>
                    <th className="text-start font-semibold py-2 pr-4 uppercase">
                      Type
                    </th>
                    <th className="text-start font-semibold py-2 pr-4 uppercase">
                      View
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((item, index) => (
                    <tr className="border-b border-ash" key={index}>
                      <td className="py-3 pl-4">
                        {item?.transactionHash?.slice(0, 6)}...
                      </td>
                      <td className="py-3 pr-4">
                        {item?.bridgeNetwork === "eth" ? "Ethereum" : "Polygon"}
                      </td>
                      <td className="py-3 pr-4">
                        {ethers.utils.formatEther(item?.amount)}
                      </td>
                      <td className="py-3 pr-4">{item?.status}</td>
                      <td className="py-3 pr-4">{item?.date}</td>
                      <td className="py-3 pr-4">{item?.FunctionType}</td>
                      <td className="py-3 pr-4">
                        <button
                          onClick={() =>
                            ViewTransaction(
                              item?.transactionHash,
                              item?.bridgeNetwork
                            )
                          }
                          className="text-primary2"
                        >
                          <Eye size={20} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <span className="text-sm mt-5 text-center">
                If you don't see any success pending or failed transaction,
                please <span className="text-primary2">contact support.</span>
              </span>
            </>
          ) : (
            <>
              <div className="w-full flex items-center">
                <span className="font-bold text-2xl">
                  No Transactions Found
                </span>
              </div>
              <span className="text-sm mt-5">
                If you don't see any success pending or failed transaction,
                please <span className="text-primary2">contact support.</span>
              </span>
            </>
          )}
        </div>
      )}
    </div>
  );
}
