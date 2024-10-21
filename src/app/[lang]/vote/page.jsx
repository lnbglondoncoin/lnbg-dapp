"use client";
import { Store } from "@/context/Store";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import AddProposalModal from "./_components/AddProposalModal";
import Image from "next/image";

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
    <div className="flex w-full justify-center p-5 sm:p-10">
      <div className="flex w-full flex-col gap-5">
        <div className="flex flex-col sm:flex-row items-center gap-5 justify-between">
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-semibold">
              LNBG Vote is a home of governance
            </h1>
            <span className="max-w-lg">
              LNBG governance is a collective of companies, communities, and
              token holders working together for the future of the LNBG protocol
            </span>
          </div>
          <Image
            src="/static/coin.png"
            alt="LNBG Coin"
            className="w-[250px] sm:w-[150px]"
            width={200}
            height={200}
          />
        </div>
        <div className="flex flex-wrap gap-5">
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
        <div className="flex flex-col rounded-2xl overflow-hidden">
          {masterContractProposalData.map((proposal, index) => (
            <Link
              href={`/vote/${index}`}
              className="bg-ash px-5 py-4 hover:border-primary border-b-2 transition-all ease-in duration-300 grid grid-cols-1 md:grid-cols-[6fr_2fr_2fr] gap-3 md:gap-10 border-coal relative"
              key={index}
            >
              <div className="flex flex-col justify-between w-full">
                <div className="text-xs flex gap-1">
                  <p className=" text-gray12">End&nbsp;Date:</p>
                  <p>{formatTimestamp(proposal?.endTime)}</p>
                </div>
                <p className="font-bold text-xl text-white">
                  {proposal?.description?.title}
                </p>
              </div>
              <div className="flex md:flex-col justify-between items-center md:items-end">
                <div className="text-xs flex gap-1">
                  <p className="text-gray12 text-nowrap">
                    Proposed by:{" "}
                    <span className="text-white">
                      {proposal.proposer.slice(0, 3)}...
                      {proposal.proposer.slice(-4)}
                    </span>
                  </p>
                </div>
                <span
                  className={`${
                    proposal?.executed === "true"
                      ? "text-blue-200"
                      : "text-red-400"
                  } text-xl font-semibold rounded-3xl`}
                >
                  {proposal?.executed === "true" ? "Executed" : "Pending"}
                </span>
              </div>
              <div className="flex flex-col h-full pb-2 justify-between items-end">
                <p className="text-lg text-nowrap">4.8M For - 1.2M Against</p>
                <div className="flex w-full">
                  <div className="h-[2px] w-[80%] bg-primary"></div>
                  <div className="h-[2px] w-[20%] bg-red-500"></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
