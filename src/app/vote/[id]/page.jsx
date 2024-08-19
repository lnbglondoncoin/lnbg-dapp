"use client";

import { Store } from "@/context/Store";
import { proposals } from "@/lib/proposals";
import Link from "next/link";
import React, { useContext, useState } from "react";
import Countdown from "react-countdown";


function detail(summary) {
  if (!summary) {
    return <p>No summary available</p>;
  }

  // Function to parse the summary text
  const parseSummary = (summary) => {
    const parsedContent = [];
    const regex = /([A-Z][a-z\s]+:|[A-Z][a-z\s]+$)/g;

    let lastIndex = 0;
    let match;

    while ((match = regex.exec(summary)) !== null) {
      const currentIndex = match.index;
      const title = match[0].trim();
      const paragraph = summary.slice(lastIndex, currentIndex).trim();
      if (paragraph) {
        parsedContent.push({ type: "paragraph", text: paragraph });
      }
      parsedContent.push({ type: "title", text: title });
      lastIndex = currentIndex + title.length;
    }

    const lastParagraph = summary.slice(lastIndex).trim();
    if (lastParagraph) {
      parsedContent.push({ type: "paragraph", text: lastParagraph });
    }

    return parsedContent;
  };

  // Parse the summary text
  const parsedContent = parseSummary(summary);

  return (
    <div className="ps">
      {parsedContent.map((item, index) => (
        <p key={index} style={{ margin: "8px 0" }}>
          {item?.type === "title" ? <strong>{item?.text}</strong> : item?.text}
        </p>
      ))}
    </div>
  );
}

const ProposalDetailsPage = ({ params }) => {
  const { addingVote, masterContractProposalData } = useContext(Store);

  // const proposal = proposals.find((p) => p.id == params.id);
  
  console.log(
    params.proposalId,
    "params.proposalIdparams.proposalIdparams.proposalId"
  );

  const id = params.proposalId;

  const [showVoteModal, setShowVoteModal] = useState(false);
  const [selectedVote, setSelectedVote] = useState(null);
  const [castVote, setCastVote] = useState(0);

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp * 1000); // Convert seconds to milliseconds
    console.log(date, "datedatedatedatedate");
    return date.toLocaleString(); // Customize date format as per your requirement
  };

  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <span>Completed!</span>;
    } else {
      // Render a countdown with days included
      return (
        <span>
          {days}d {hours}h {minutes}m {seconds}s
        </span>
      );
    }
  };

  const calculatePercentage = (votes, totalVotes) => {
    if (totalVotes === 0) {
      return 0; // Return 0 if there are no votes to avoid division by zero
    }
    return (votes / totalVotes) * 100;
  };

  const yesVotes = +masterContractProposalData?.[id]?.yesVotes || 0;
  const noVotes = +masterContractProposalData?.[id]?.noVotes || 0;
  const totalVotes = yesVotes + noVotes;





  return (
    <div className="w-full min-h-screen flex flex-col gap-3 rounded-xl bg-gray22/50 max-w-[87rem] p-6">
      {showVoteModal && (
        <div className="fixed inset-0 bg-black/50 z-[9999] flex items-center justify-center">
          <div className="bg-coal p-5 rounded-xl max-w-[512px] w-full flex flex-col gap-3">
            <h1 className="text-3xl">Cast your vote</h1>
            <div className="flex gap-3 justify-center pt-10">
              <button
       onClick={() => {
        setSelectedVote("yes"), setCastVote(1);
      }}
                className={`${
                  selectedVote === "yes"
                    ? "bg-primary text-black"
                    : "bg-transparent border-white border-2"
                } text-sm hover:bg-primary w-full hover:text-black hover:border-0 px-10 py-2 rounded-full`}
              >
                Yes
              </button>
              <button
           onClick={() => {
            setSelectedVote("no"), setCastVote(0);
          }}
                className={`${
                  selectedVote === "no"
                    ? "bg-primary text-black"
                    : "bg-transparent border-white border-2"
                } text-sm hover:bg-primary w-full hover:text-black hover:border-0 px-10 py-2 rounded-full`}
              >
                No
              </button>
            </div>
            <button
              onClick={() => {
                addingVote(
                  masterContractProposalData?.[id]?.proposerId,
                  castVote
                ),
                setShowVoteModal(false)}}
              className="bg-gray2 text-black text-sm hover:bg-gray8 px-10 py-2 rounded-full"
            >
              Vote
            </button>
          </div>
        </div>
      )}

      <div className="flex justify-between w-full gap-10">
        <Link href="/vote">
          <div className="flex items-center gap-2 cursor-pointer">
            {backIcon}
            <p className="font-light">Back</p>
          </div>
        </Link>
        <button
          onClick={() => setShowVoteModal(true)}
          className="bg-primary/90 text-black text-sm hover:bg-primary px-10 py-2 rounded-full"
        >
          Vote
        </button>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-semibold">{masterContractProposalData?.[id]?.description?.title}</h1>
          <div className="bg-gray2 text-black px-3 pt-1.5 pb-2 w-fit rounded-full">
          {masterContractProposalData?.[id]?.executed === "true"
              ? "Executed"
              : "Pending"}
          </div>
          <p className="font-light"> {detail(masterContractProposalData[id]?.description?.summry)}</p>
          <div className="grid lg:grid-cols-2 gap-5">
            <div className="bg-gray2/10 rounded-xl flex flex-col gap-2 p-5">
              <h1 className="text-xl">Information</h1>
              <div className="flex justify-between">
                <span className="text-gray10">Voting System:</span>
                <span className="font-bold">Single Choice</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray10">Start date:</span>
                <span className="font-bold">  {formatTimestamp(masterContractProposalData?.[id]?.startTime)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray10">End date:</span>
                <span className="font-bold"><Countdown
                    date={
                      Date.now() + +masterContractProposalData?.[id]?.endTime
                    }
                    renderer={renderer}
                  /></span>
              </div>
            </div>
            <div className="bg-gray2/10 rounded-xl flex flex-col gap-2 p-5">
              <h1 className="text-xl">Current results</h1>
              <div className="flex justify-between">
                <span className="text-gray10">Agree:</span>
                <span className="font-bold">{masterContractProposalData?.[id]?.yesVotes}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray10">Disagree:</span>
                <span className="font-bold">{masterContractProposalData?.[id]?.noVotes}</span>
              </div>
              <div className="w-full bg-gray12/75 h-3 rounded-full mt-5">
                <div className={`w-[60%] bg-primary rounded-full h-full`}></div>
              </div>
            </div>
          </div>
          {/* <h2 className="text-xl font-semibold">Liquidity</h2>
          <p className="font-light">{proposal?.liquidity}</p>
          <h2 className="text-xl font-semibold">Exposure</h2>
          <p className="font-light">{proposal?.exposure}</p>
          <h2 className="text-xl font-semibold">Credibility</h2>
          <p className="font-light">{proposal?.credibility}</p>
          <h2 className="text-xl font-semibold">Accessibility</h2>
          <p className="font-light">{proposal?.accesibility}</p>
          <h2 className="text-xl font-semibold">Application</h2>
          <p className="font-light">{proposal?.application}</p>
          <h2 className="text-xl font-semibold">Diligence</h2>
          <p className="font-light">{proposal?.dilligence}</p>
          <h2 className="text-xl font-semibold">Fees</h2>
          <p className="font-light">{proposal?.fees}</p>
          <h2 className="text-xl font-semibold">Marketing</h2>
          <p className="font-light">{proposal?.marketing}</p> */}
        </div>
      </div>
    </div>
  );
};

const backIcon = (
  <svg
    width="18"
    height="19"
    viewBox="0 0 18 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.1775 4.94751L2.625 9.50001L7.1775 14.0525"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.3749 9.5H2.75244"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ProposalDetailsPage;
