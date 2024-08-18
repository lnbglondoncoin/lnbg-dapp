import { proposals } from "@/lib/proposals";
import Link from "next/link";

export default function VotingPage() {
  return (
    <div className="flex w-full justify-center p-10">
      <div className="flex w-full flex-col gap-5">
        <h1 className="mb-5 text-5xl font-semibold text-white">Proposals</h1>
        {proposals.map((proposal, index) => (
          <Link
            href={`/vote/${proposal.id}`}
            className="bg-ash px-5 py-[17px] relative rounded-2xl"
            key={index}
          >
            <div className="text-xs flex gap-1 ">
              <p className=" text-gray12">End&nbsp;Date:</p>
              <p>{proposal.endDate}</p>
            </div>
            <div className="flex justify-between  items-center">
              <p className=" font-bold text-xl text-white w-[68%]">
                {proposal.title}
              </p>
              <button
                className={`${
                  proposal.status === "Pending"
                    ? "bg-red-700 text-black"
                    : "bg-green-700 text-black"
                } absolute right-3 top-6 px-2 py-[6px] text-center font-semibold rounded-3xl`}
              >
                {proposal.status}
              </button>
            </div>
            <p className="mt-2 text-gray12">{proposal.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
