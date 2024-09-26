"use client";
import React, { useState, useEffect, createContext } from "react";
import { ethers, providers, utils } from "ethers";
import CryptoJS from "crypto-js";
import axios from "axios";
import {
  useWeb3Modal,
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers5/react";
import { ToastContainer, toast } from "react-toastify";

import LnbgCoinAddress from "./contractsData/LnbgLondonCoin-address.json";
import LnbgCoin from "./contractsData/LnbgLondonCoin.json";

import LnbgMasterContractAddress from "./contractsData/LnbgLondonCoinMasterContract-address.json";
import LnbgMasterContract from "./contractsData/LnbgLondonCoinMasterContract.json";

import LnbgMainBridgeBaseAddress from "./contractsData/LnbgLondonCoinBridgeBase-address.json";
import LnbgMainBridgeBaseAbi from "./contractsData/LnbgLondonCoinBridgeBase.json";


//////   ETHEREUM WRAPPED BRIDGE  //////////////
import WrappedBridgeETHLnbgAddress from "./contractsData/WrappedBridgeLnbg-address.json";
import WrappedBridgeETHLnbgAbi from "./contractsData/WrappedBridgeLnbg.json";

import WrappedTokenETHLnbgAddress from "./contractsData/WrappedLnbgLondon-address.json";
import WrappedTokenETHLnbgAbi from "./contractsData/WrappedLnbgLondon.json";

//////   BINANCE Staking Contract WITH USDT AND USDC   //////////////
import USDCTokenAddress from "./contractsData/USDCToken-address.json";
import USDTTokenAddress from "./contractsData/USDTToken-address.json";

import LnbgLondonCoinStakingContractAddress from "./contractsData/LnbgLondonCoinStakingContract-address.json";
import LnbgLondonCoinStakingContractAbi from "./contractsData/LnbgLondonCoinStakingContract.json";


const getProviderMasterContract = () => {
  const providers = process.env.NEXT_PUBLIC_RPC_URL_BNB;
  const provider = new ethers.providers.JsonRpcProvider(providers); //"http://localhost:8545/"
  const masterContract = new ethers.Contract(
    LnbgMasterContractAddress.address,
    LnbgMasterContract.abi,
    provider
  );
  return masterContract;
};

const getProviderStakingContract = () => {
  const providers = process.env.NEXT_PUBLIC_RPC_URL_BNB;
  const provider = new ethers.providers.JsonRpcProvider(providers); //"http://localhost:8545/"
  const stakingContract = new ethers.Contract(
    LnbgLondonCoinStakingContractAddress.address,
    LnbgLondonCoinStakingContractAbi.abi,
    provider
  );
  return stakingContract;
};


export const Store = createContext();

export const StoreProvider = ({ children }) => {
  const { address, chainId, isConnected } = useWeb3ModalAccount();

  const { walletProvider } = useWeb3ModalProvider();

  const [loader, setloader] = useState(false);

  const [tronConnected, setTronConnected] = useState(false);

  const [proposal, setProposals] = useState([]);

  const [withdrawInvestedTokensRequests, setWithdrawInvestedTokensRequests] = useState([]);

  const [masterContractProposalData, setMasterContractProposalData] = useState([]);

  const [stakingContractData, setStakingContractData] = useState({
    LnbgBalance: 0,
    UsdtBalance: 0,
    UsdcBalance: 0,
    // stakedTokens: 0,
    // startTime: 0,
    // duration: 0,
    // rewardEarned: 0,
    // ClaimedReward: 0,
    userStakesInfo:[],
  });

  const [masterContractData, setMasterContractData] = useState({
    totalStakers: 0,
    totalStakeAmount: 0,
    totalRewards: 0,
    distributed: 0,
  });

  const [coin, setCoin] = useState([]);
  const [tronCurrentAccount, setTronCurrentAccount] = useState("");
  const [tronWalletForBridge, setTronWalletForBridge] = useState("");

  //////////////////////////////////////////  MASTER CONTRACT STAKING ///////////////////////////////
  //////////////////////////////////////////  MASTER CONTRACT STAKING ///////////////////////////////
  //////////////////////////////////////////  MASTER CONTRACT STAKING ///////////////////////////////
  //////////////////////////////////////////  MASTER CONTRACT STAKING ///////////////////////////////
  //////////////////////////////////////////  MASTER CONTRACT STAKING ///////////////////////////////
  //////////////////////////////////////////  MASTER CONTRACT STAKING ///////////////////////////////

  const getLnbgBalance = async () => {
    if (isConnected) {
      const provider = new ethers.providers.Web3Provider(walletProvider);
      const signer = provider.getSigner();
      const LnbgContracts = new ethers.Contract(
        LnbgCoinAddress.address,
        LnbgCoin.abi,
        signer
      );
      const balance = await LnbgContracts.balanceOf(address?.toString());
      setStakingContractData((prevState) => ({
        ...prevState,
        LnbgBalance: ethers.utils.formatEther(balance?.toString())?.toString(),
      }));
    }
  };

  const getStakingContractData = async () => {
    const totalStakedTokens = await getProviderStakingContract().totalStakedTokens();
    const totalStakers = await getProviderStakingContract().totalInvestors();
    const getAllUsersEarnedTokens = await getProviderStakingContract().getAllUsersEarnedTokens();
    const getAllUsersClaimedTokens = await getProviderStakingContract().getAllUsersClaimedTokens();
    
    console.log(getAllUsersEarnedTokens?.toString(),"getAllUsersEarnedTokens");
    console.log(getAllUsersClaimedTokens?.toString(),"getAllUsersClaimedTokens");
    console.log(
      totalStakedTokens?.toString(),
      totalStakers?.toString(),
      "dadasdasdddddddddddddddddddddd"
    );
    setMasterContractData((prevState) => ({
      ...prevState,
      totalStakers: totalStakers?.toString(),
      totalRewards: ethers.utils.formatEther(getAllUsersEarnedTokens?.toString() || 0)?.toString(),
      totalStakeAmount: ethers.utils.formatEther(totalStakedTokens?.toString() || 0)?.toString(),
      distributed: ethers.utils.formatEther(getAllUsersClaimedTokens?.toString() || 0)?.toString(),
    }));
  };


  // const getStakedInfoByUser = async () => {
  //   console.log(address, isConnected, "addressaddress");
  //   if (isConnected) {
  //     const provider = new ethers.providers.Web3Provider(walletProvider);
  //     const signer = provider.getSigner();
  //     const stakingContract = new ethers.Contract(
  //       LnbgLondonCoinStakingContractAddress.address,
  //       LnbgLondonCoinStakingContractAbi.abi,
  //       signer
  //     );
  //     let info = await stakingContract.stakingInfo(address?.toString());
  //     let earnedRewardTokens = await stakingContract.rewardedTokens(
  //       address?.toString()
  //     );
  //     console.log(info, "addressaddrssssassadddess");
  //     console.log(info?.stakedTokens?.toString(), "addressaddrssssassadddess");
  //     console.log(info?.startTime?.toString(), "addressaddrssssassadddess");
  //     console.log(info.duration?.toString(), "addressaddrssssassadddess");
  //     console.log(info?.rewardEarned?.toString(), "addressaddrssssassadddess");

  //     setStakingContractData((prevState) => ({
  //       ...prevState,
  //       stakedTokens: ethers.utils
  //         .formatEther(info?.stakedTokens?.toString())
  //         ?.toString(),
  //       startTime: info?.startTime?.toString(),
  //       duration: info.duration?.toString() * 1000,
  //       ClaimedReward: ethers.utils
  //         .formatEther(info?.rewardEarned?.toString())
  //         ?.toString(),
  //       rewardEarned: ethers.utils
  //         .formatEther(earnedRewardTokens?.toString())
  //         ?.toString(),
  //     }));
  //   }
  // };

  const getStakedInfoByUser = async () => {
    console.log(address, isConnected, "addressaddress");

    if (isConnected) {
        const provider = new ethers.providers.Web3Provider(walletProvider);
        const signer = provider.getSigner();

        const stakingContract = new ethers.Contract(
            LnbgLondonCoinStakingContractAddress.address,
            LnbgLondonCoinStakingContractAbi.abi,
            signer
        );

        try {
            // Get the number of stakes for the user
            const numberOfStakes = await stakingContract.userStakes(address); // Assuming you have a way to get this
console.log(numberOfStakes,"numberOfStakes");
            const stakedInfoArray = [];

            for (let i = 0; i < numberOfStakes?.length; i++) {
                // Get each stake by index
                const stakeInfo = await stakingContract.userStakes(address, i);

                // Fetch earned reward tokens using the rewardedTokens function
                const earnedRewardTokens = await stakingContract.rewardedTokens(address, i);
                
                stakedInfoArray.push({
                    stakedTokens: ethers.utils.formatEther(stakeInfo.stakedTokens.toString()),
                    startTime: stakeInfo.startTime.toString(),
                    duration: stakeInfo.duration.toString() * 1000, // Convert to milliseconds if needed
                    rewardEarned: ethers.utils.formatEther(stakeInfo.rewardEarned.toString()),
                    earnedRewardTokens: ethers.utils.formatEther(earnedRewardTokens.toString()),
                });
            }

            console.log(stakedInfoArray, "User Staked Info");
            setStakingContractData((prevState) => ({
                ...prevState,
                userStakesInfo: stakedInfoArray,
            }));
        } catch (error) {
            console.error("Error fetching staked info:", error);
        }
    } else {
        console.warn("User is not connected.");
    }
};

  

  const StakeTokensSend = async (amount, duration, token) => {
    setloader(true);
    if (!isConnected) {
      return toast.error("Please Connect Your Wallet."), setloader(false);
    }
    try {
      if (amount <= 0) return setloader(false), toast.error("Please enter amount");

      const provider = new ethers.providers.Web3Provider(walletProvider);
      const signer = provider.getSigner();
      const stakingContract = new ethers.Contract(
        LnbgLondonCoinStakingContractAddress.address,
        LnbgLondonCoinStakingContractAbi.abi,
        signer
      );
      
      const LnbgContracts = new ethers.Contract(
        token === "USDT" ? USDTTokenAddress.address : token === "USDC" ? USDCTokenAddress.address : LnbgCoinAddress.address,
        LnbgCoin.abi,
        signer
      );

      const tokens = ethers.utils.parseEther(amount?.toString());
      console.log(address, "addressaddress");
      let balance = await LnbgContracts.balanceOf(address?.toString());
      let allow = await LnbgContracts.allowance(
        address?.toString(),
        LnbgLondonCoinStakingContractAddress?.address
      );

      console.log(allow?.toString(), balance?.toString(), "allowallowallow");

      if (+tokens?.toString() > +balance?.toString())
        return (
          setloader(false),
          toast.error(
            `Your available balance is ${Number(
              ethers.utils.formatEther(balance?.toString())
            )?.toFixed(5)} $Lnbg`
          )
        );

      if (+allow?.toString() < +tokens?.toString()) {
        console.log("condidtion True");

        let approve = await LnbgContracts.approve(
          LnbgLondonCoinStakingContractAddress.address,
          tokens?.toString()
        );

        await approve.wait();
      }

      const currentTimestamp = Math.floor(Date.now() / 1000);
      const ninetyDaysInSeconds = duration * 24 * 60 * 60; // 90 days in seconds
      let days = currentTimestamp + ninetyDaysInSeconds;
      
      console.log(days, "daysdaysdays");
      let tokenAddress = token === "USDT" ? USDTTokenAddress.address : token === "USDC" ? USDCTokenAddress.address : LnbgCoinAddress.address;
      
      let respon = await stakingContract.stakeTokens(tokens?.toString(), days, tokenAddress);
      await respon.wait();

      toast.success("successfuly Staked"); 
      setloader(false);
    } catch (error) {
      setloader(false);
      console.log(error);
      toast.error(`${JSON.stringify(error.reason)}`);
      return false;
    }
  };

  const unstakeTokensRequest = async (token) => {
    setloader(true);
    if (!isConnected) {
      return toast.error("Please Connect Your Wallet."), setloader(false);
    }
    try {
      // if (+stakingContractData?.rewardEarned <= 0)
      //   return setloader(false), toast.error("Please wait for End Time");
      const provider = new ethers.providers.Web3Provider(walletProvider);
      const signer = provider.getSigner();

      const stakingContract = new ethers.Contract(
        LnbgLondonCoinStakingContractAddress.address,
        LnbgLondonCoinStakingContractAbi.abi,
        signer
      );
      
      let tokenAddress = token === "USDT" ? USDTTokenAddress.address : token === "USDC" ? USDCTokenAddress.address : LnbgCoinAddress.address;
      
      const response = await stakingContract.unstakeTokensRequest(tokenAddress);
      await response.wait();

      // await GetValues();
      // setWithdrawRequests([]);
      // setWithdrawInvestedTokensRequests([]);
      // await GetWithdrawRequests();
      toast.success("successfuly Requested");
      setloader(false);
    } catch (error) {
      setloader(false);
      console.log(error);
      toast.error(`${JSON.stringify(error.reason)}`);
    }
  };

  ////////////////////////////////////////  MASTER CONTRACT PROPOSAL ///////////////////////////////
  ////////////////////////////////////////  MASTER CONTRACT PROPOSAL ///////////////////////////////
  ////////////////////////////////////////  MASTER CONTRACT PROPOSAL ///////////////////////////////
  ////////////////////////////////////////  MASTER CONTRACT PROPOSAL ///////////////////////////////
  ////////////////////////////////////////  MASTER CONTRACT PROPOSAL ///////////////////////////////
  ////////////////////////////////////////  MASTER CONTRACT PROPOSAL ///////////////////////////////

  const submitProposal = async (data) => {
    setloader(true);
    if (!isConnected) {
      console.log(data, "datadata");
      return toast.error("Please Connect Your Wallet."), setloader(false);
    }
    try {
      const provider = new ethers.providers.Web3Provider(walletProvider);
      const signer = provider.getSigner();
      const masterContract = new ethers.Contract(
        LnbgMasterContractAddress.address,
        LnbgMasterContract.abi,
        signer
      );
      console.log(provider);
      console.log(address, "address");
      const response = await masterContract.submitProposal(data);
      await response.wait();
      // setWithdrawRequests([]);
      // setWithdrawInvestedTokensRequests([]);
      // await GetWithdrawRequests();
      toast.success("successfuly Submited");
      GetAllProposalByArray();
      setloader(false);
    } catch (error) {
      setloader(false);
      toast.error(`${JSON.stringify(error.reason)}`);
      console.log(error);
    }
  };

  const GetAllProposalByArray = async () => {
    try {
      console.log("sdassssssss");
      setloader(true);
      let RewardAmount = [];

      const proposalCount = await getProviderMasterContract().proposalCount();
      console.log(proposalCount?.toString(), "proposalCount?.toString()");

      for (let i = 1; i <= proposalCount?.toString(); i++) {
        console.log("proposalCount");

        let reward = await getProviderMasterContract().proposals(i);
        console.log(reward, "rewardrewardreward");

        const decryptData = (ciphertext) => {
          try {
            let keys = process.env.NEXT_PUBLIC_ENCRYPT_SECRET_KEYS;
            const bytes = CryptoJS.AES.decrypt(ciphertext, keys);
            const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
            return decryptedData;
          } catch (error) {
            console.error("Error decrypting data:", error);
            return null;
          }
        };

        let title = decryptData(reward?.description?.toString());

        const Data = {
          proposer: reward.proposer?.toString(),
          description: title,
          startTime: reward.startTime?.toString(),
          endTime: reward.endTime?.toString(),
          votes: reward.votes?.toString(),
          yesVotes: reward.yesVotes?.toString(),
          noVotes: reward.noVotes?.toString(),
          executed: reward.executed?.toString(),
          proposerId: i,
        };
        console.log(Data, "Data");
        RewardAmount.push(Data);
      }
      setMasterContractProposalData(RewardAmount);
      setloader(false);
    } catch (error) {
      setloader(false);
      console.log(error);
    }
  };

  const addingVote = async (votingId, status) => {
    if (!isConnected) {
      return toast.error("Please Connect Your Wallet."), setloader(false);
    }

    try {
      setloader(true);
      const provider = new ethers.providers.Web3Provider(walletProvider);
      const signer = provider.getSigner();
      let masterContract = new ethers.Contract(
        LnbgMasterContractAddress.address,
        LnbgMasterContract.abi,
        signer
      );

      if (status === 0) {
        const totalProposalLists = await masterContract.vote(votingId, false);
        totalProposalLists.wait();
        setloader(false);
      } else {
        const totalProposalLists = await masterContract.vote(votingId, true);
        totalProposalLists.wait();
        setloader(false);
      }
      GetAllProposalByArray();
      setloader(false);
    } catch (error) {
      setloader(false);
      console.log(error);
      toast.error(`${JSON.stringify(error.reason)}`);
    }
  };

  // ////////////////////////////////////////  Bridge CONTRACT Functions ///////////////////////////////
  // ////////////////////////////////////////  Bridge CONTRACT Functions ///////////////////////////////
  // ////////////////////////////////////////  Bridge CONTRACT Functions ///////////////////////////////
  // ////////////////////////////////////////  Bridge CONTRACT Functions ///////////////////////////////

  const LockDeposit = async (amount, from, to) => {
    try {
      if (from === "Binance" && to == "Ethereum") {
        if (chainId != 97) {
          return toast.error("Please change Network to BNB Smart Chain");
        }
        const provider = new ethers.providers.Web3Provider(walletProvider);
        const signer = provider.getSigner();

        const LnbgBNBMainBridge = new ethers.Contract(
          LnbgMainBridgeBaseAddress.address,
          LnbgMainBridgeBaseAbi.abi,
          signer
        );
        const LnbgToken = new ethers.Contract(
          LnbgCoinAddress.address,
          LnbgCoin.abi,
          signer
        );
        let burnAmount = ethers.utils.parseEther(amount?.toString());
        let tokensApproved = await LnbgToken.allowance(
          address,
          LnbgMainBridgeBaseAddress.address
        );
        if (tokensApproved < burnAmount) {
          let tokens = ethers.utils.parseEther("3000000000000000");
          let tx = await LnbgToken.approve(
            LnbgMainBridgeBaseAddress.address,
            tokens
          );
          await tx.wait();
        }
        let tx = await LnbgBNBMainBridge.depositTokenFor(address,address,burnAmount,1); //TODO change wanted chain
        await tx.wait();
      } 

    // else if (from === "Ethereum" && to == "Binance") {
    //     if (chainId != 11155111) {
    //       //TODO::
    //       return toast.error("Please change Network to Sepolia Smart Chain");
    //     }
    //     const provider = new ethers.providers.Web3Provider(walletProvider);
    //     const signer = provider.getSigner();

    //     const LnbgETHMainBridge = new ethers.Contract(
    //       LnbgMainBridgeBaseAddress.address,
    //       LnbgMainBridgeBaseAbi.abi,
    //       signer
    //     );
    //     const LnbgToken = new ethers.Contract(
    //       LnbgCoinAddress.address,
    //       LnbgCoin.abi,
    //       signer
    //     );
    //     let burnAmount = ethers.utils.parseEther(amount?.toString());
    //     let tokensApproved = await LnbgToken.allowance(
    //       address,
    //       LnbgMainBridgeBaseAddress.address
    //     );
    //     if (tokensApproved < burnAmount) {
    //       let tokens = ethers.utils.parseEther("3000000000000000");
    //       let tx = await LnbgToken.approve(
    //         LnbgMainBridgeBaseAddress.address,
    //         tokens
    //       );
    //       await tx.wait();
    //     }
    //     let tx = await LnbgETHMainBridge.depositTokenFor(
    //       address,
    //       address,
    //       burnAmount,
    //       to
    //     ); //TODO change wanted chain
    //     await tx.wait();
    //   }

      // else if (from === 56 && to == 1000) {
      //   if (chainId != from) {
      //     //Tron
      //     return toast.error("Please change Network to BNB Smart Chain");
      //   } else if (!tronWalletForBridge) {
      //     return toast.error("Please input Tron wallet Address");
      //   }
      //   const provider = new ethers.providers.Web3Provider(walletProvider);
      //   const signer = provider.getSigner();

      //   const LnbgBNBMainBridge = new ethers.Contract(
      //     LnbgMainBridgeBaseAddress.address,
      //     LnbgBNBBridge.abi,
      //     signer
      //   );
      //   const LnbgToken = new ethers.Contract(
      //     LnbgCoinAddress.address,
      //     LnbgCoin.abi,
      //     signer
      //   );

      //   let burnAmount = ethers.utils.parseEther(amount?.toString());

      //   let tokensApproved = await LnbgToken.allowance(
      //     address,
      //     LnbgMainBridgeBaseAddress.address
      //   );
      //   if (tokensApproved < burnAmount) {
      //     let tokens = ethers.utils.parseEther("3000000000000000");
      //     let tx = await LnbgToken.approve(
      //       LnbgMainBridgeBaseAddress.address,
      //       tokens
      //     );
      //     await tx.wait();
      //   }

      //   let tx = await LnbgBNBMainBridge.lockDeposit(burnAmount, to); //TODO change wanted chain
      //   await tx.wait();

      //   let apiData = {
      //     from: address,
      //     to: tronWalletForBridge,
      //     amount: burnAmount?.toString(),
      //     date: new Date(),
      //     chainId: to,
      //   };
      //   await apis.swapTokenForTronBridge(apiData);
      //   //await apis.lockForTronUpdate(apiData);
      // }
    } catch (error) {
      console.log(error, "error");
    }
  };

  const unLockDeposit = async (amount, from, to) => {
    try {
      // if (from === 80002 && to == 11155111) {
      if (from === "Ethereum" && to === "Binance") {
        if (chainId != 11155111) {
          //ETHEREUM
          return toast.error("Please Change Network to Ethereum Chain");
        }
        const provider = new ethers.providers.Web3Provider(walletProvider);
        const signer = provider.getSigner();

        const wrappedETHBridge = new ethers.Contract(
          WrappedBridgeETHLnbgAddress.address,
          WrappedBridgeETHLnbgAbi.abi,
          signer
        );
        const wrappedETHToken = new ethers.Contract(
          WrappedTokenETHLnbgAddress.address,
          WrappedTokenETHLnbgAbi.abi,
          signer
        );

        let tokens = ethers.utils.parseEther("300000000000000");
        let tokensApproved = await wrappedETHToken.allowance(
          address,
          WrappedBridgeETHLnbgAddress.address
        );

        if (tokensApproved < tokens) {
          let tx = await wrappedETHToken.approve(
            WrappedBridgeETHLnbgAddress.address,
            tokens
          );
          await tx.wait();
        }
        let burnAmount = ethers.utils.parseEther(amount?.toString());
        let tx = await wrappedETHBridge.burn(address, address, burnAmount, 97); //TODO change wanted chain
        await tx.wait();
      } 
      // else if (from === "Ethereum" && to === "Binance") {
      //   if (chainId != from) {
      //     //ETHEREUM
      //     return toast.error("Please change network to Polygon chain");
      //   }
      //   const provider = new ethers.providers.Web3Provider(walletProvider);
      //   const signer = provider.getSigner();

      //   const wrappedPolyBridge = new ethers.Contract(
      //     WrappedPolygonBridgeAddress.address,
      //     WrappedETHBridge.abi,
      //     signer
      //   );
      //   const wrappedToken = new ethers.Contract(
      //     WrappedPolygonTokenAddress.address,
      //     WrappedETHToken.abi,
      //     signer
      //   );

      //   let tokens = ethers.utils.parseEther("300000000000000");
      //   let tokensApproved = await wrappedToken.allowance(
      //     address,
      //     WrappedPolygonBridgeAddress.address
      //   );

      //   if (tokensApproved < tokens) {
      //     let tx = await wrappedToken.approve(
      //       WrappedPolygonBridgeAddress.address,
      //       tokens
      //     );
      //     await tx.wait();
      //   }
      //   let burnAmount = ethers.utils.parseEther(amount?.toString());
      //   let tx = await wrappedPolyBridge.burn(address, burnAmount, to); //TODO change wanted chain
      //   await tx.wait();
      // }
      // else if (from === 1000 && to == 56) {
      //   if (!tronConnected) {
      //     //Tron TODO:
      //     return toast.error("Please Connect Tron wallet");
      //   } else if (!tronWalletForBridge) {
      //     return toast.error("Please Insert BNB wallet");
      //   }
      //   // let resultToken = await TronWrappedLnbgContract.approve("TQHVAmS6CoDuDfM74kGyAuHM1zuGDzQri9",tokens?.toString()).send({
      //   //   feeLimit:100_000_000,
      //   //   callValue:0,
      //   //   shouldPollResponse:true
      //   // });
      //   // // await result.wait();
      //   // console.log(resultToken, "resultTokenresultTokenresultToken");

      //   // let result = await TronWrappedBridgeContract.burn("TUQvyTGrZkqgVQrWP8gwJH1tce8cfp8yuX",tokens?.toString(),1,1000).send({
      //   //     feeLimit:100_000_000,
      //   //     callValue:0,
      //   //     shouldPollResponse:true
      //   //   });

      //   //   console.log(result, "resultresultresultresult2");

      //   let TronWrappedLnbgContract = await window.tronWeb
      //     .contract()
      //     .at(WrappedTronTokenAddress.address);
      //   console.log("check");

      //   let tokens = ethers.utils.parseEther("300000000000000");
      //   let tokensApproved = await TronWrappedLnbgContract.allowance(
      //     tronCurrentAccount,
      //     WrappedTronBridgeAddress.address
      //   );

      //   if (tokensApproved < tokens) {
      //     await TronWrappedLnbgContract.approve(
      //       WrappedTronBridgeAddress.address,
      //       tokens
      //     ).send({
      //       feeLimit: 100_000_000,
      //       callValue: 0,
      //       shouldPollResponse: true,
      //     });
      //   }

      //   let burnAmount = ethers.utils.parseEther(amount?.toString());
      //   console.log("transaction2");
      //   let TronWrappedBridgeContract = await window.tronWeb
      //     .contract()
      //     .at(WrappedTronBridgeAddress.address);

      //   console.log("transaction3");

      //   await TronWrappedBridgeContract.burn(
      //     tronWalletForBridge,
      //     burnAmount,
      //     to
      //   ).send({
      //     feeLimit: 100_000_000,
      //     callValue: 0,
      //     shouldPollResponse: true,
      //   });
      //   console.log("transaction40,", tronCurrentAccount);
      // }
    } catch (error) {
      console.log(error, "error");
    }
  };

  useEffect(() => {
    getLnbgBalance();
  }, [address]);

  return (
    <>
      <Store.Provider
        value={{
          coin,
          loader,
          setloader,
          GetAllProposalByArray,
          stakingContractData,
          tronCurrentAccount,
          setTronCurrentAccount,
          tronWalletForBridge,
          setTronWalletForBridge,
          unstakeTokensRequest,
          StakeTokensSend,
          getStakedInfoByUser,
          masterContractData,
          getStakingContractData,
          submitProposal,
          proposal,
          masterContractProposalData,
          addingVote,
          withdrawInvestedTokensRequests,
          tronConnected,
          setTronConnected,
          LockDeposit,
          unLockDeposit,
        }}
      >
        {children}
      </Store.Provider>
    </>
  );
};
