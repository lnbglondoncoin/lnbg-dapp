"use client";

import { Store } from "@/context/Store";
import { proposals } from "@/lib/proposals";
import Link from "next/link";
import React, { useContext, useState } from "react";
import Countdown from "react-countdown";

// function detail(summary) {
//   if (!summary) {
//     return <p>No summary available</p>;
//   }

//   // Function to parse the summary text
//   const parseSummary = (summary) => {
//     const parsedContent = [];
//     const regex = /([A-Z][a-z\s]+:|[A-Z][a-z\s]+$)/g;

//     let lastIndex = 0;
//     let match;

//     while ((match = regex.exec(summary)) !== null) {
//       const currentIndex = match.index;
//       const title = match[0].trim();
//       const paragraph = summary.slice(lastIndex, currentIndex).trim();
//       if (paragraph) {
//         parsedContent.push({ type: "paragraph", text: paragraph });
//       }
//       parsedContent.push({ type: "title", text: title });
//       lastIndex = currentIndex + title.length;
//     }

//     const lastParagraph = summary.slice(lastIndex).trim();
//     if (lastParagraph) {
//       parsedContent.push({ type: "paragraph", text: lastParagraph });
//     }

//     return parsedContent;
//   };

//   // Parse the summary text
//   const parsedContent = parseSummary(summary);

//   return (
//     <div className="ps">
//       {parsedContent.map((item, index) => (
//         <p key={index} style={{ margin: "8px 0" }}>
//           {item?.type === "title" ? <strong>{item?.text}</strong> : item?.text}
//         </p>
//       ))}
//     </div>
//   );
// }

const ProposalDetailsPage = ({ params }) => {
  const { addingVote, masterContractProposalData } = useContext(Store);

  const id = params.id;
  const { lang } = params;

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
            <h1 className="text-3xl">
              {lang === "en"
                ? "Cast your vote"
                : lang === "es"
                  ? "Vota"
                  : lang === "ru"
                    ? "Проголосовать"
                    : "Vote"}
            </h1>
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
                  setShowVoteModal(false);
              }}
              className="bg-gray2 text-black text-sm hover:bg-gray8 px-10 py-2 rounded-full"
            >
              Vote
            </button>
          </div>
        </div>
      )}

      <Link href="/vote">
        <div className="flex items-center gap-2 cursor-pointer">
          {backIcon}
          <p className="font-light">Back</p>
        </div>
      </Link>

      <div className="flex flex-col">
        <div className="flex flex-col gap-3">
          <span className="text-gray2">
            Proposed by:{" "}
            <span className="text-white">
              {masterContractProposalData?.[id]?.proposer}
            </span>
          </span>
          <h1 className="text-4xl font-semibold pb-10">
            {masterContractProposalData?.[id]?.description?.title}
          </h1>
          <div className="grid max-w-screen lg:grid-cols-[7fr_3fr] gap-5">
            <div className="bg-ash rounded-xl flex flex-col gap-2 py-5 px-3">
              <div className="">
                <span className="text-lg font-bold">Proposed Transactions</span>
                <div className="mt-3 bg-black p-3 rounded-md">
                  <u className="cursor-pointer text-lg">
                    0x1f...f984
                  </u>
                  <div className="pl-5">
                    .transfer(
                    <br />
                    <div className="pl-3">
                      <u className="cursor-pointer text-lg">
                        0x3B...2f9C,
                      </u>
                      <div className="pl-3">122830000000000000000000,</div>
                    </div>
                    )
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-ash rounded-xl flex flex-col gap-2 p-5">
              <h1 className="text-xl">Proposal Votes:</h1>
              <div className="relative p-1 w-full">
                <span className="absolute top-0 right-0 rotate-90">
                  {cornerSvg}
                </span>
                <span className="absolute top-0 left-0">{cornerSvg}</span>
                <div className="bg-[repeating-linear-gradient(135deg,#131418,#131418_10px,#1F2129_0,#1F2129_20px)] rounded-md flex flex-col gap-3 p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-primary uppercase text-sm font-bold">
                      For {masterContractProposalData?.[id]?.yesVotes}
                    </span>
                    <span className="text-primary uppercase text-sm font-bold">
                      Against {masterContractProposalData?.[id]?.noVotes}
                    </span>
                  </div>
                  <ProgressBar indicator="85" />
                </div>
                <span className="absolute bottom-0 left-0 -rotate-90">
                  {cornerSvg}
                </span>
                <span className="absolute right-0 bottom-0 rotate-180">
                  {cornerSvg}
                </span>
              </div>
              <div className="flex py-2 items-center justify-between w-full">
                <span
                  className={`${
                    masterContractProposalData?.[id]?.executed === "true"
                      ? "text-blue-200 bg-blue-200/10"
                      : "text-red-400 bg-red-400/10"
                  }  w-fit px-2 font-semibold`}
                >
                  {masterContractProposalData?.[id]?.executed === "true"
                    ? "Executed"
                    : "Pending"}
                </span>
                <div className="flex gap-2 text-sm">
                  <span className="text-gray10">Ends in:</span>
                  <span className="font-bold">
                    <Countdown
                      date={
                        Date.now() + +masterContractProposalData?.[id]?.endTime
                      }
                      renderer={renderer}
                    />
                  </span>
                </div>
              </div>
              <button
                onClick={() => setShowVoteModal(true)}
                className="bg-primary/90 font-bold text-black hover:bg-primary px-10 py-2 rounded-full"
              >
                Vote
              </button>
            </div>
          </div>
          <h1 className="text-xl font-bold">Information</h1>
          <div className="flex gap-5">
            <span className="text-gray2">Voting System:</span>
            <span className="font-medium">Single Choice</span>
          </div>
          <div className="flex gap-5">
            <span className="text-gray2">Start date:</span>
            <span className="font-medium">
              {" "}
              {formatTimestamp(masterContractProposalData?.[id]?.startTime)}
            </span>
          </div>
          <div className="flex gap-5">
            <span className="text-gray2">End date:</span>
            <span className="font-medium">
              {" "}
              {formatTimestamp(masterContractProposalData?.[id]?.endTime)}
            </span>
          </div>
          <p className="font-light w-full lg:max-w-[70%]">
            {masterContractProposalData[id]?.description?.summary}
          </p>
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

const ProgressBar = ({ indicator = "" }) => {
  return (
    <div className="relative pt-0.5">
      <div
        className={`absolute -top-1`}
        style={{
          left: indicator + "%",
        }}
      >
        {indicatorSvg}
      </div>
      <div className="grid grid-cols-[3fr_5fr_2fr] gap-0.5 h-full w-full">
        <div className="w-full h-3.5 rounded-full bg-[repeating-linear-gradient(135deg,rgba(255,61,108,.15),rgba(255,61,108,.15)_3px,#ff3d6c_0,#ff3d6c_5px)]"></div>
        <div className="w-full h-3.5 rounded-full bg-[repeating-linear-gradient(135deg,rgba(249,231,39,.15),rgba(249,231,39,.15)_3px,#f9e727_0,#f9e727_5px)]"></div>
        <div className="w-full h-3.5 rounded-full bg-primary"></div>
      </div>
    </div>
  );
};

const indicatorSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="12" fill="#ffba00">
    <path
      stroke="#11121A"
      strokeWidth="3"
      d="m2.646 5.768 3.086 3.086a2.5 2.5 0 0 0 3.536 0l3.086-3.086c1.575-1.575.46-4.268-1.768-4.268H4.414c-2.227 0-3.342 2.693-1.768 4.268Z"
    ></path>
  </svg>
);

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

const cornerSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="6"
    height="6"
    viewBox="0 0 6 6"
    fill="none"
  >
    <path
      id="Vector 804"
      d="M0.570312 5.98531V5.70031C0.570312 2.86709 2.86709 0.570312 5.70031 0.570312H5.98531"
      stroke="white"
    />
  </svg>
);

export default ProposalDetailsPage;
