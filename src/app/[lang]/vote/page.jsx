"use client";
import { Store } from "@/context/Store";
import { proposals } from "@/lib/proposals";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import AddProposalModal from "./_components/AddProposalModal";

export default function VotingPage({ params }) {
  const { lang } = params;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("Proposal");

  const { masterContractProposalData, GetAllProposalByArray } =
    useContext(Store);

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp * 1000); // Convert seconds to milliseconds
    console.log(date, "datedatedatedatedate");
    return date?.toLocaleString(); // Customize date format as per your requirement
  };

  useEffect(() => {
    GetAllProposalByArray();
  }, []);

  console.log(
    masterContractProposalData,
    "masterContractProposalDatamasterContractProposalDatamasterContractProposalData"
  );

  return (
    <div className="flex w-full justify-center p-10">
      <div className="flex w-full flex-col gap-5">
        <div className="flex flex-wrap md:gap-10 items-center justify-between">
          <h1 className="mb-5 text-5xl font-semibold text-white">
            {lang === "en"
              ? "Proposals"
              : lang === "es"
                ? "Propuestas"
                : lang === "ru"
                  ? "Предложения"
                  : "Propositions"}
          </h1>
          <AddProposalModal lang={lang} />
        </div>
        {masterContractProposalData.map((proposal, index) => (
          <Link
            href={`/vote/${index}`}
            className="bg-ash px-5 py-[17px] relative rounded-2xl"
            key={index}
          >
            <div className="text-xs flex gap-1 ">
              <p className=" text-gray12">End&nbsp;Date:</p>
              <p>{formatTimestamp(proposal?.endTime)}</p>
            </div>
            <div className="flex justify-between  items-center">
              <p className=" font-bold text-xl text-white w-[68%]">
                {proposal?.description?.title}
              </p>
              <button
                className={`${
                  proposal?.executed === "true"
                    ? "bg-red-700 text-black"
                    : "bg-green-700 text-black"
                } absolute right-3 top-6 px-2 py-[6px] text-center font-semibold rounded-3xl`}
              >
                {proposal?.executed === "true" ? "Executed" : "Pending"}
              </button>
            </div>
            <p className="mt-2 text-gray12">
              {proposal?.description?.summry?.slice(0, 100)}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
