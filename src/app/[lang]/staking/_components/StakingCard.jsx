"use client";
import Button from "@/components/buttons/Button";
import ConnectWalletButton from "@/components/buttons/ConnectWalletButton";
import { Store } from "@/context/Store";
import { cn } from "@/lib/utils";
import { useWeb3ModalAccount } from "@web3modal/ethers5/react";
import { Activity } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import SelectDropdown from "../../bridge/_components/SelectDropdown";
import { usdcSvg, usdtSvg } from "@/components/icons";
import Image from "next/image";

export default function StakingCard({ lang }) {
  // --------------For hydration error-------------------
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  // ----------------------------------------------------

  const { address, isConnected } = useWeb3ModalAccount();
  const [tab, setTab] = useState("Stake");
  const [selectedOffer, setSelectedOffer] = useState("12 months");
  const [stake, setStake] = useState(null);
  const [selectedToken, setSelectedToken] = useState("USDT");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { StakeTokensSend, unstakeTokensRequest, getStakedInfoByUser } = useContext(Store);

  const stakeTokens = async () => {
    try {
      const months = parseInt(selectedOffer);
      const days = months * 30;
      console.log(days, months, "months");
      if (days < 90) {
        return toast.error("Please Add More then 90 Days");
      }
      await StakeTokensSend(stake?.toString(), days, selectedToken);
    } catch (error) {
      console.log(error);
    }
  };

  const unstakingToken = async () => {
    try {
      await unstakeTokensRequest(selectedToken);
    } catch (error) {
      console.error("Error while staking tokens:", error);
    }
  };

  useEffect(() => {
    getStakedInfoByUser();
  }, [address]);

  return (
    <div className="relative col-span-3 flex w-full flex-col items-center gap-5 rounded-3xl bg-ash p-5 lg:col-span-2">
      <div
        className="bg-primary2 absolute -top-2.5 px-5 lg:px-12 py-0.5 text-sm font-semibold text-black"
        style={{
          clipPath:
            "polygon(1% 0%, 99% 0%, 100% 50%, 99% 100%, 1% 100%, 0% 50%)",
        }}
      >
        {lang === "en"
          ? "Hurry to Catch the Increased APR!"
          : lang === "es"
            ? "¡Date prisa para atrapar el APR aumentado!"
            : lang === "ru"
              ? "Поторопитесь, чтобы поймать увеличенный APR!"
              : "Dépêchez-vous de rattraper l'APR augmenté!"}
      </div>
      <div className="flex w-full items-center gap-5 text-lg font-medium">
        <button
          onClick={() => {
            setTab("Stake"), setStake(0);
          }}
          className={cn(
            tab == "Stake" ? "text-white" : "text-gray2",
            "uppercase"
          )}
        >
          {lang === "en"
            ? "Stake"
            : lang === "es"
              ? "Estaca"
              : lang === "ru"
                ? "Доля"
                : "Enjeu"}
        </button>
        <button
          onClick={() => {
            setTab("Unstake"), setStake(0);
          }}
          className={cn(
            tab == "Unstake" ? "text-white" : "text-gray2",
            "uppercase"
          )}
        >
          {lang === "en"
            ? "Unstake"
            : lang === "es"
              ? "Desapostar"
              : lang === "ru"
                ? "Отменить ставку"
                : "Désenjeu"}
        </button>
      </div>
      <div className="grid w-full grid-cols-1 sm:grid-cols-3 rounded-[2rem] sm:rounded-full bg-gray2/10 p-1">
        <button
          onClick={() => setSelectedOffer("12 months")}
          className={cn(
            "flex w-full flex-col items-center justify-center gap-1 rounded-full py-1",
            selectedOffer == "12 months" && "border border-white/50"
          )}
        >
          {lang === "en"
            ? "12 months"
            : lang === "es"
              ? "12 meses"
              : lang === "ru"
                ? "12 месяцев"
                : "12 mois"}
          <div className="flex items-center gap-1 font-semibold">
            <span className="">APR </span>
            <span className="text-primary2">24%</span>
            <span className="text-gray2/50 line-through">12%</span>
          </div>
        </button>
        <button
          onClick={() => setSelectedOffer("6 months")}
          className={cn(
            "flex w-full flex-col items-center justify-center gap-1 rounded-full py-1",
            selectedOffer == "6 months" && "border border-white/50"
          )}
        >
          {lang === "en"
            ? "6 months"
            : lang === "es"
              ? "6 meses"
              : lang === "ru"
                ? "6 месяцев"
                : "6 mois"}
          <div className="flex items-center gap-1 font-semibold">
            <span className="">APR </span>
            <span className="text-primary2">18%</span>
            <span className="text-gray2/50 line-through">9%</span>
          </div>
        </button>
        <button
          onClick={() => setSelectedOffer("3 months")}
          className={cn(
            "flex w-full flex-col items-center justify-center gap-1 rounded-full py-1",
            selectedOffer == "3 months" && "border border-white/50"
          )}
        >
          {lang === "en"
            ? "3 months"
            : lang === "es"
              ? "3 meses"
              : lang === "ru"
                ? "3 месяца"
                : "3 mois"}
          <div className="flex items-center gap-1 font-semibold">
            <span className="">APR </span>
            <span className="text-primary2">12%</span>
            <span className="text-gray2/50 line-through">6%</span>
          </div>
        </button>
      </div>
      <span className="w-full text-lg font-semibold">
        {lang === "en"
          ? "LOCK-UP FOR"
          : lang === "es"
            ? "BLOQUEO POR"
            : lang === "ru"
              ? "БЛОКИРОВКА НА"
              : "BLOCAGE POUR"}{" "}
        <span className="text-primary2 uppercase">
          {selectedOffer} | APR{" "}
          {selectedOffer == "12 months"
            ? "24%"
            : selectedOffer == "6 months"
              ? "18%"
              : "12%"}
        </span>
      </span>
      <div className="flex w-full flex-col gap-1">
        <div className="w-full text-xl text-gray2/70">
          {lang === "en"
            ? "Your Stake:"
            : lang === "es"
              ? "Tu apuesta:"
              : lang === "ru"
                ? "Ваша ставка:"
                : "Votre enjeu:"}
        </div>
        <div className="flex w-full items-center gap-2 border-b border-gray2/50 pb-2">
          {lockIcon}
          <input
            type="text"
            inputMode="numeric"
            name="stake"
            id="stake"
            value={stake}
            placeholder="0.0"
            onChange={(e) => setStake(e.target.value)}
            className={`w-full border-none bg-transparent text-3xl outline-none ${tab === "Unstake" ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={tab === "Unstake"} // Disable input if isUnstake is true
            // className="w-full border-none bg-transparent text-3xl outline-none"
          />
          <SelectDropdown
            button={
              <div className="flex items-center gap-3">
                {selectedToken === "USDT" ? (
                  usdtSvg
                ) : selectedToken === "USDC" ? (
                  usdcSvg
                ) : (
                  <Image
                    width={20}
                    height={20}
                    className="mx-1"
                    alt="LNBG"
                    src="/static/logo.png"
                  />
                )}
                {selectedToken}
              </div>
            }
            open={dropdownOpen}
            setOpen={setDropdownOpen}
          >
            <div
              onClick={() => {
                setSelectedToken("USDT");
                setDropdownOpen(false);
              }}
              className="flex items-center gap-2 cursor-pointer"
            >
              {usdtSvg} USDT
            </div>
            <div
              onClick={() => {
                setSelectedToken("USDC");
                setDropdownOpen(false);
              }}
              className="flex items-center gap-2 cursor-pointer"
            >
              {usdcSvg} USDC
            </div>
            <div
              onClick={() => {
                setSelectedToken("LNBG");
                setDropdownOpen(false);
              }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <Image
                width={20}
                height={20}
                className="mx-1"
                alt="LNBG"
                src="/static/logo.png"
              />{" "}
              LNBG
            </div>
          </SelectDropdown>
        </div>
      </div>
      <div className="flex w-full items-center justify-between text-xl">
        <div className="flex items-center gap-1">
          {lang === "en"
            ? "Your Reward:"
            : lang === "es"
              ? "Tu recompensa:"
              : lang === "ru"
                ? "Ваша награда:"
                : "Votre récompense:"}{" "}
          {stake && (
            <span className="text-primary2 font-semibold">
              {stake ? stake * 0.24 : 0} Locked LNBG
            </span>
          )}
        </div>
        {stake && (
          <div className="text-primary2 flex items-center gap-1 font-semibold">
            <Activity size={20} />
            <span>{stake ? stake * 0.48 : 0}</span>
          </div>
        )}
      </div>
      {isClient &&
        (isConnected && address ? (
          <Button
            onClick={
              tab === "Stake"
                ? () => {
                    stakeTokens(), setStake(0);
                  }
                : () => {
                    unstakingToken(), setStake(0);
                  }
            }
            title={tab === "Stake" ? "Stake" : "UnStake"}
            className="hover:bg-primary2 bg-primary text-xl font-semibold uppercase text-black"
          />
        ) : (
          <ConnectWalletButton />
        ))}
    </div>
  );
}

const lockIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
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
