import { Info } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CoinCard({
  imgUrl = "",
  symbol = "",
  name = "",
  apy,
  tvl = "",
  provider = "",
  trustScore,
  indicator = "",
  lang = "en",
}) {
  return (
    <Link
      href={`/${lang}/staking/${symbol}`}
      className="w-full rounded-2xl gap-1 bg-ash p-3 flex flex-col items-center justify-center hover:border-primary border border-ash transition-all ease-in duration-300 cursor-pointer"
    >
      <Image src={imgUrl} width={40} height={40} quality={100} alt="coin" />
      <span className="uppercase text-white/50">{symbol}</span>
      <div className="py-1 text-2xl font-bold">{name}</div>
      <div className="p-4 rounded-xl border w-full border-white/20 flex flex-col items-center gap-2 my-10">
        <div className="flex w-full items-baseline gap-1">
          <span className="text-gray2">APY</span>
          <Info className="w-5 h-5 text-gray2 self-end mb-1" />
          <div className="w-full border-b border-dashed border-gray2/50"></div>
          <span className="text-2xl font-bold text-primary">{apy}%</span>
        </div>
        <div className="flex w-full items-baseline gap-1">
          <span className="text-gray2">TVL</span>
          <div className="w-full border-b border-dashed border-gray2/50"></div>
          <span className="text-2xl">${tvl}</span>
        </div>
        <div className="flex w-full items-baseline gap-1">
          <span className="text-gray2">Provider</span>
          <div className="w-full border-b border-dashed border-gray2/50"></div>
          <span className="text-2xl">{provider}</span>
        </div>
      </div>
      <div className="relative p-1 w-full">
        <span className="absolute top-0 right-0 rotate-90">{cornerSvg}</span>
        <span className="absolute top-0 left-0">{cornerSvg}</span>
        <div className="w-full bg-[repeating-linear-gradient(135deg,#131418,#131418_10px,#1F2129_0,#1F2129_20px)] flex items-center gap-3 p-3">
          <div className="rounded-full bg-[#04E000] min-w-[48px] w-12 h-12 flex items-center justify-center">
            <Image
              src="/static/shieldtick.svg"
              width={24}
              height={24}
              alt="shield tick"
            />
          </div>
          <div className="flex flex-col h-full w-full justify-between">
            <div className="flex items-baseline justify-between">
              <span className="text-xl font-medium">Trust Score</span>
              <span className="text-xl font-semibold text-primary">
                {trustScore}
              </span>
            </div>
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
          </div>
        </div>
        <span className="absolute bottom-0 left-0 -rotate-90">{cornerSvg}</span>
        <span className="absolute right-0 bottom-0 rotate-180">
          {cornerSvg}
        </span>
      </div>
    </Link>
  );
}

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

const indicatorSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="12" fill="#ffba00">
    <path
      stroke="#11121A"
      strokeWidth="3"
      d="m2.646 5.768 3.086 3.086a2.5 2.5 0 0 0 3.536 0l3.086-3.086c1.575-1.575.46-4.268-1.768-4.268H4.414c-2.227 0-3.342 2.693-1.768 4.268Z"
    ></path>
  </svg>
);
