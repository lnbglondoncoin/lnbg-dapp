"use client";

import TransactionTable from "./_components/TransactionTable";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function TransactionsPage() {
  const router = useRouter();
  return (
    <div className="flex w-full justify-center p-10">
      <div className="flex w-full flex-col gap-5">
        <div className="flex gap-3">
          <button onClick={() => router.push("/bridge")}>
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-5xl font-semibold text-white">
            Transaction History
          </h1>
        </div>
        <span className="mb-5 text-lg">
          Transaction History only shows transactions from Native and
          Socketbridge.
        </span>
        <TransactionTable />
      </div>
    </div>
  );
}
