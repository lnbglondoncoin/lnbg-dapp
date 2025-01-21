"use client";
import { Store } from "@/context/Store";
import React, { useContext, useEffect } from "react";
import Countdown from "react-countdown";

export default function ScoresCard({ lang }) {
  const { stakingContractData, masterContractData } = useContext(Store);
  console.log(stakingContractData, "contractDatacontractDatacontractData");

  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <span>Completed!</span>;
    } else {
      // Render a countdown
      return (
        //   <span>
        //   {hours}:{minutes}:{seconds}
        //  </span>
        <span>
          {days}:{hours}:{minutes}:{seconds}
        </span>
      );
    }
  };

  return (
    <div className="col-span-3 flex h-fit flex-col gap-8 rounded-3xl bg-ash p-6 max-h-[27rem] overflow-auto lg:col-span-1">
      <div className="flex flex-col gap-3">
        <span className="text-primary2 text-sm font-semibold uppercase">
          {lang === "en"
            ? "My Staked"
            : lang === "es"
              ? "Mi apuesta"
              : lang === "ru"
                ? "Моя ставка"
                : "Mon pari"}
        </span>
        <div className="flex items-baseline gap-1">
          <span className="w-fit text-nowrap font-semibold text-gray2">
            {lang === "en"
              ? "Earned Reward"
              : lang === "es"
                ? "Recompensa ganada"
                : lang === "ru"
                  ? "Заработанная награда"
                  : "Récompense gagnée"}
          </span>
          <div className="w-full border-b border-dashed border-gray2/50"></div>
          <div className="flex items-center gap-1">
            {Number(stakingContractData?.TotalEarnedReward)?.toFixed(6)}
            {lockIcon}
          </div>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="w-fit text-nowrap font-semibold text-gray2">
            {lang === "en"
              ? "Claimed Reward"
              : lang === "es"
                ? "Recompensa reclamada"
                : lang === "ru"
                  ? "Запрошенная награда"
                  : "Récompense demandée"}
          </span>
          <div className="w-full border-b border-dashed border-gray2/50"></div>
          <div className="flex items-center gap-1">
            {Number(stakingContractData?.claimedRewards)?.toFixed(6)}
            {lockIcon}
          </div>
        </div>
        {/* WBNB STAKED START */}
        <span className="text-primary2 text-sm font-semibold uppercase">
          {lang === "en"
            ? "WBNB Staked"
            : lang === "es"
              ? "WBNB apostados"
              : lang === "ru"
                ? "Ставка WBNB"
                : "Jetons WBNB misés"}
        </span>
        <div className="flex items-baseline gap-1">
          <span className="w-fit text-nowrap font-semibold text-gray2">
            {lang === "en"
              ? "Staked WBNB Tokens"
              : lang === "es"
                ? "Tokens WBNB apostados"
                : lang === "ru"
                  ? "Ставка токенов WBNB"
                  : "Jetons WBNB misés"}
          </span>
          <div className="w-full border-b border-dashed border-gray2/50"></div>
          <div className="flex items-center gap-1">
            {stakingContractData?.WBNBStaked?.stakedTokens || 0}
            {lockIcon}
          </div>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="w-fit text-nowrap font-semibold text-gray2">
            {lang === "en"
              ? "Staking End Time"
              : lang === "es"
                ? "Hora de finalización de la apuesta"
                : lang === "ru"
                  ? "Время окончания ставки"
                  : "Heure de fin de la mise"}
          </span>
          <div className="w-full border-b border-dashed border-gray2/50"></div>
          <div className="flex items-center gap-1">
            <Countdown
              date={new Date(stakingContractData?.WBNBStaked?.duration || 0)}
              renderer={renderer}
            />
            {/* {stakingContractData?.WBNBStaked?.duration} */}
            {lockIcon}
          </div>
        </div>
        {/* WETH STAKED START */}
        <span className="text-primary2 text-sm font-semibold uppercase">
          {lang === "en"
            ? "WETH Staked"
            : lang === "es"
              ? "WETH apostados"
              : lang === "ru"
                ? "Ставка WETH"
                : "Jetons WETH misés"}
        </span>
        <div className="flex items-baseline gap-1">
          <span className="w-fit text-nowrap font-semibold text-gray2">
            {lang === "en"
              ? "Staked WETH Tokens"
              : lang === "es"
                ? "Tokens WETH apostados"
                : lang === "ru"
                  ? "Ставка токенов WETH"
                  : "Jetons WETH misés"}
          </span>
          <div className="w-full border-b border-dashed border-gray2/50"></div>
          <div className="flex items-center gap-1">
            {stakingContractData?.WETHStaked?.stakedTokens || 0}
            {lockIcon}
          </div>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="w-fit text-nowrap font-semibold text-gray2">
            {lang === "en"
              ? "Staking End Time"
              : lang === "es"
                ? "Hora de finalización de la apuesta"
                : lang === "ru"
                  ? "Время окончания ставки"
                  : "Heure de fin de la mise"}
          </span>
          <div className="w-full border-b border-dashed border-gray2/50"></div>
          <div className="flex items-center gap-1">
            <Countdown
              date={new Date(stakingContractData?.WETHStaked?.duration || 0)}
              renderer={renderer}
            />
            {/* {stakingContractData?.WETHStaked?.duration} */}
            {lockIcon}
          </div>
        </div>
        {/* WBTC STAKED START */}
        <span className="text-primary2 text-sm font-semibold uppercase">
          {lang === "en"
            ? "WBTC Staked"
            : lang === "es"
              ? "WBTC apostados"
              : lang === "ru"
                ? "Ставка WBTC"
                : "Jetons WBTC misés"}
        </span>
        <div className="flex items-baseline gap-1">
          <span className="w-fit text-nowrap font-semibold text-gray2">
            {lang === "en"
              ? "Staked WBTC Tokens"
              : lang === "es"
                ? "Tokens WBTC apostados"
                : lang === "ru"
                  ? "Ставка токенов WBTC"
                  : "Jetons WBTC misés"}
          </span>
          <div className="w-full border-b border-dashed border-gray2/50"></div>
          <div className="flex items-center gap-1">
            {stakingContractData?.WBTCStaked?.stakedTokens || 0}
            {lockIcon}
          </div>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="w-fit text-nowrap font-semibold text-gray2">
            {lang === "en"
              ? "Staking End Time"
              : lang === "es"
                ? "Hora de finalización de la apuesta"
                : lang === "ru"
                  ? "Время окончания ставки"
                  : "Heure de fin de la mise"}
          </span>
          <div className="w-full border-b border-dashed border-gray2/50"></div>
          <div className="flex items-center gap-1">
            <Countdown
              date={new Date(stakingContractData?.WBTCStaked?.duration || 0)}
              renderer={renderer}
            />
            {/* {stakingContractData?.WBTCStaked?.duration} */}
            {lockIcon}
          </div>
        </div>
        {/* LNBG STAKED START */}
        <span className="text-primary2 text-sm font-semibold uppercase">
          {lang === "en"
            ? "LNBG Staked"
            : lang === "es"
              ? "LNBG apostados"
              : lang === "ru"
                ? "Ставка LNBG"
                : "Jetons LNBG misés"}
        </span>
        <div className="flex items-baseline gap-1">
          <span className="w-fit text-nowrap font-semibold text-gray2">
            {lang === "en"
              ? "Staked LNBG Tokens"
              : lang === "es"
                ? "Tokens LNBG apostados"
                : lang === "ru"
                  ? "Ставка токенов LNBG"
                  : "Jetons LNBG misés"}
          </span>
          <div className="w-full border-b border-dashed border-gray2/50"></div>
          <div className="flex items-center gap-1">
            {stakingContractData?.LNBGStaked?.stakedTokens || 0}
            {lockIcon}
          </div>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="w-fit text-nowrap font-semibold text-gray2">
            {lang === "en"
              ? "Staking End Time"
              : lang === "es"
                ? "Hora de finalización de la apuesta"
                : lang === "ru"
                  ? "Время окончания ставки"
                  : "Heure de fin de la mise"}
          </span>
          <div className="w-full border-b border-dashed border-gray2/50"></div>
          <div className="flex items-center gap-1">
            <Countdown
              date={new Date(stakingContractData?.LNBGStaked?.duration || 0)}
              renderer={renderer}
            />
            {/* {stakingContractData?.LNBGStaked?.duration} */}
            {lockIcon}
          </div>
        </div>
        {/* USDT STAKED START */}
        <span className="text-primary2 text-sm font-semibold uppercase">
          {lang === "en"
            ? "USDT Staked"
            : lang === "es"
              ? "USDT apostados"
              : lang === "ru"
                ? "Ставка USDT"
                : "Jetons USDT misés"}
        </span>
        <div className="flex items-baseline gap-1">
          <span className="w-fit text-nowrap font-semibold text-gray2">
            {lang === "en"
              ? "Staked USDT Tokens"
              : lang === "es"
                ? "Tokens USDT apostados"
                : lang === "ru"
                  ? "Ставка токенов USDT"
                  : "Jetons USDT misés"}
          </span>
          <div className="w-full border-b border-dashed border-gray2/50"></div>
          <div className="flex items-center gap-1">
            {stakingContractData?.USDTStaked?.stakedTokens || 0}
            {lockIcon}
          </div>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="w-fit text-nowrap font-semibold text-gray2">
            {lang === "en"
              ? "Staking End Time"
              : lang === "es"
                ? "Hora de finalización de la apuesta"
                : lang === "ru"
                  ? "Время окончания ставки"
                  : "Heure de fin de la mise"}
          </span>
          <div className="w-full border-b border-dashed border-gray2/50"></div>
          <div className="flex items-center gap-1">
            <Countdown
              date={new Date(stakingContractData?.USDTStaked?.duration || 0)}
              renderer={renderer}
            />
            {/* {stakingContractData?.USDTStaked?.duration} */}
            {lockIcon}
          </div>
        </div>
        {/* USDC STAKED START */}
        <span className="text-primary2 text-sm font-semibold uppercase">
          {lang === "en"
            ? "USDC Staked"
            : lang === "es"
              ? "USDC apostados"
              : lang === "ru"
                ? "Ставка USDC"
                : "Jetons USDC misés"}
        </span>
        <div className="flex items-baseline gap-1">
          <span className="w-fit text-nowrap font-semibold text-gray2">
            {lang === "en"
              ? "Staked USDC Tokens"
              : lang === "es"
                ? "Tokens USDC apostados"
                : lang === "ru"
                  ? "Ставка токенов USDC"
                  : "Jetons USDC misés"}
          </span>
          <div className="w-full border-b border-dashed border-gray2/50"></div>
          <div className="flex items-center gap-1">
            {stakingContractData?.USDCStaked?.stakedTokens || 0}
            {lockIcon}
          </div>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="w-fit text-nowrap font-semibold text-gray2">
            {lang === "en"
              ? "Staking End Time"
              : lang === "es"
                ? "Hora de finalización de la apuesta"
                : lang === "ru"
                  ? "Время окончания ставки"
                  : "Heure de fin de la mise"}
          </span>
          <div className="w-full border-b border-dashed border-gray2/50"></div>
          <div className="flex items-center gap-1">
            <Countdown
              date={new Date(stakingContractData?.USDCStaked?.duration || 0)}
              renderer={renderer}
            />
            {/* {stakingContractData?.USDCStaked?.duration} */}
            {lockIcon}
          </div>
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
    <g clipPath="url(#clip0_183_181)">
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
        <stop stopColor="#FFFF34" />
        <stop offset="1" stopColor="#A1A100" />
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
