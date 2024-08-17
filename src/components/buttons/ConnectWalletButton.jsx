"use client";

import { useWeb3Modal } from "@web3modal/ethers5/react";
import Button from "./Button";

export default function ConnectWalletButton() {
  const { open } = useWeb3Modal();
  return (
    <Button
      title="Connect Wallet"
      onClick={() => open()}
      className="hover:bg-primary2 bg-primary text-lg font-semibold text-black"
    />
  );
}
