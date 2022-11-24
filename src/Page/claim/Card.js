import React, { useState, useEffect } from "react";
import { StyledCard, InnerCard, Desktop, Mobile } from "./StyledCard";
import Stats from "./components/Stats";
import Reward from "./components/Reward";
import Heading from "../../components/Heading/Heading";
import MobileStats from "./components/MobileStats";
import MobileRewards from "./components/MobileRewards";
import Web3 from "web3";
import CONFIG from "../../config";
import PresaleABI from "../../config/ABI/PresaleABI.json";

import { useWallet } from "use-wallet";
import Button from "../../components/Button/Button";

const Card = () => {
  const [presaleContract, setPresaleContract] = useState();
  const [isInitialized, setInitialized] = useState(false);
  const [purchaseInfo, setPurchaseInfo] = useState();
  const [pendingReward, setPendingReward] = useState(0);
  const [baseTime, setBaseTime] = useState(0);
  const [presaleEndTime,setPresaleEndTime] = useState(0)
  const wallet = useWallet();

  const initializeContracts = async () => {
    let provider = wallet.ethereum ? wallet.ethereum : CONFIG.RPC;
    if (wallet.ethereum && Number(wallet.ethereum.chainId) != CONFIG.CHAIN_ID) {
      provider = CONFIG.RPC
    }
    const web3 = new Web3(provider);
    const _presaleContract = new web3.eth.Contract(
      PresaleABI,
      CONFIG.HBTPresale
    );
    setPresaleContract(_presaleContract);
    setInitialized(true);
  };

  const loadContractData = async () => {
   
    if (wallet.account) {
      let _purchaseInfo = await presaleContract.methods
        .purchaseInfo(wallet.account)
        .call();
      const _pendingReward = await presaleContract.methods
        .getPendingReward(wallet.account)
        .call();
      const _baseTime = await presaleContract.methods.baseTime().call();
      const _presaleEndTime = await presaleContract.methods.presaleEndTime().call();
      setPresaleEndTime(_presaleEndTime)
      const maxTrenches = await presaleContract.methods.maxTrenches().call();
      const timePassed = (Date.now() / 1000) - (presaleEndTime);
      let claimableTrenches = timePassed/(CONFIG.ONE_MONTH);
      if (claimableTrenches > maxTrenches) {
        claimableTrenches = maxTrenches
      }
      const totalVested = _purchaseInfo.totalHBTBought;
      let pendingClaimable =  (totalVested*(claimableTrenches))/(maxTrenches);
      if (presaleEndTime == 0) {
        pendingClaimable =0
      }

      const unvestedAmount = totalVested -pendingClaimable- _purchaseInfo.totalHBTClaimed;

      _purchaseInfo = {
        ..._purchaseInfo,
        unvestedAmount,
        pendingClaimable:pendingClaimable
      } 
      setPurchaseInfo(_purchaseInfo);
      setPendingReward(_pendingReward / 1e18);
      setBaseTime(_baseTime);
    }
  };

  useEffect(() => {
    initializeContracts();
    const interval = setInterval(() => {
      initializeContracts();
    }, 4000);
    return () => clearInterval(interval);
  }, [wallet.account, wallet.ethereum]);

  useEffect(() => {
    if (isInitialized) {
      loadContractData();
    }
  }, [isInitialized, wallet.account]);

  const ConnectWalletView = () => {
    return (
      <>
        <Heading
          Text="Please Connect Your Wallet"
          size="40px"
          faktumFont
          ls="0.1rem"
          lg="35px"
          xm="27px"
          ms="27px"
          m="0 0 1rem 0"
        />

        <Button
          Text="Connect Wallet"
          onClick={() => {
            wallet.connect();
          }}
        />
      </>
    );
  };

  return (
    <>
      <Desktop>
        <StyledCard>
          <InnerCard>
            {wallet.account ? (
              <>
                <Stats
                  purchaseInfo={purchaseInfo}
                  presaleContract={presaleContract}
                  presaleEndTime={presaleEndTime}
                />
                <Reward
                  purchaseInfo={purchaseInfo}
                  baseTime={baseTime}
                  presaleContract={presaleContract}
                  pendingReward={pendingReward}
                />
              </>
            ) : (
              ConnectWalletView()
            )}
          </InnerCard>
        </StyledCard>
      </Desktop>

      <Mobile>
        {wallet.account ? (
          <>
            <>
              <Heading
                Text="YOUR STATS "
                size="40px"
                faktumFont
                ls="0.1rem"
                lg="35px"
                xm="27px"
                ms="27px"
                m="0 0 1rem 0"
              />
              <StyledCard>
                <InnerCard>
                  <MobileStats />
                </InnerCard>
              </StyledCard>
            </>

            <>
              <Heading
                Text="YOUR REWARDS"
                size="40px"
                faktumFont
                ls="0.1rem"
                lg="35px"
                xm="27px"
                ms="27px"
                m="3rem 0 1rem 0"
              />
              <StyledCard>
                <InnerCard>
                  <MobileRewards />
                </InnerCard>
              </StyledCard>
            </>
          </>
        ) : (
          ConnectWalletView()
        )}
      </Mobile>
    </>
  );
};

export default Card;
