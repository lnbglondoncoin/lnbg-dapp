"use client";
import { Store } from '@/context/Store';
import React, { useContext } from 'react';

export default function ScoresCard() {
  const { contractData , masterContractData }=useContext(Store);
  console.log(contractData,"contractDatacontractDatacontractData");
  return (
    <div className="col-span-3 flex h-fit flex-col gap-8 rounded-3xl bg-ash p-6 lg:col-span-1">
      <div className="flex flex-col gap-3">
        <span className="text-primary2 text-sm font-semibold uppercase">
          My scores
        </span>
        <div className="flex items-baseline gap-1">
          <span className="w-fit text-nowrap font-semibold text-gray2">
            My LNGB Coin:
          </span>
          <div className="w-full border-b border-dashed border-gray2/50"></div>
          <div className="flex items-center gap-1">{contractData?.LngbBalance}{lockIcon}</div>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="w-fit text-nowrap font-semibold text-gray2">
            My staked amount:
          </span>
          <div className="w-full border-b border-dashed border-gray2/50"></div>
          <div className="flex items-center gap-1">{contractData?.stakedTokens}{lockIcon}</div>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="w-fit text-nowrap font-semibold text-gray2">
            My Earned Reward:
          </span>
          <div className="w-full border-b border-dashed border-gray2/50"></div>
          <div className="flex items-center gap-1">{contractData?.rewardEarned}{lockIcon}</div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-primary2 text-sm font-semibold uppercase">
          Total scores
        </span>
        <div className="flex items-baseline gap-1">
          <span className="w-fit text-nowrap font-semibold text-gray2">
            All Participants:
          </span>
          <div className="w-full border-b border-dashed border-gray2/50"></div>
          <div className="flex items-center gap-1">{masterContractData?.totalStakers}{lockIcon}</div>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="w-fit text-nowrap font-semibold text-gray2">
            Total staked amount:
          </span>
          <div className="w-full border-b border-dashed border-gray2/50"></div>
          <div className="flex items-center gap-1">{masterContractData?.totalStakeAmount}{lockIcon}</div>
        </div>
      </div>
    </div>
  );
}

const lockIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 42 42"
    fill="none"
  >
    <circle cx="21" cy="21" r="21" fill="url(#paint0_linear_183_181)" />
    <g clip-path="url(#clip0_183_181)">
      <path
        d="M26.5656 21.3596L27.4149 18.1902C28.1966 15.2728 26.4653 12.274 23.5479 11.4923C20.6305 10.7106 17.6318 12.4419 16.8501 15.3593L16.0008 18.5288M14.0152 29.32L22.8896 31.6979C24.6647 32.1736 25.5522 32.4114 26.3227 32.2476C27.0005 32.1035 27.6153 31.7486 28.079 31.2336C28.6061 30.6482 28.8439 29.7607 29.3195 27.9856L29.4328 27.563C29.9084 25.788 30.1462 24.9005 29.9824 24.1299C29.8383 23.4521 29.4834 22.8373 28.9684 22.3737C28.383 21.8466 27.4955 21.6088 25.7204 21.1331L16.846 18.7552C15.0709 18.2796 14.1834 18.0418 13.4129 18.2056C12.7351 18.3496 12.1203 18.7046 11.6566 19.2195C11.1295 19.805 10.8917 20.6925 10.4161 22.4675L10.3029 22.8901C9.82723 24.6652 9.58941 25.5527 9.7532 26.3233C9.89727 27.0011 10.2522 27.6158 10.7672 28.0795C11.3526 28.6066 12.2401 28.8444 14.0152 29.32Z"
        stroke="black"
        strokeWidth="3.9375"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_183_181"
        x1="28"
        y1="1.4"
        x2="21"
        y2="42"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FFFF34" />
        <stop offset="1" stop-color="#A1A100" />
      </linearGradient>
      <clipPath id="clip0_183_181">
        <rect
          width="26.25"
          height="26.25"
          fill="white"
          transform="translate(11.7197 4.92578) rotate(15)"
        />
      </clipPath>
    </defs>
  </svg>
);
