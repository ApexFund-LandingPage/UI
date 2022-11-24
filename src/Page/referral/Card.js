import React, { useState, useEffect } from "react";
import { StyledCard, InnerCard, Desktop, Mobile } from "./StyledCard";
import Button from "../../components/Button/Button";
import ReferalCode from "./components/ReferalCode";
import ReferalDetails from "./components/ReferalDetails";
import Heading from "../../components/Heading/Heading";
import { useWallet } from "use-wallet";
import Web3 from "web3";
import CONFIG from "../../config";
import ReferralABI from "../../config/ABI/ReferralABI.json";
import toast from "react-hot-toast";

const Card = () => {
  const wallet = useWallet();

  const [referralContract, setReferralContract] = useState();
  const [isInitialized, setInitialized] = useState(false);
  const [info, setInfo] = useState();
  const [loading,setLoading] = useState(false)
  const [comissionClaimEnabled, setComissionClaimEnabled] = useState(false);

  const initializeContracts = async () => {
    console.log("initializeContracts");
    const web3 = new Web3(wallet.ethereum ? wallet.ethereum : CONFIG.RPC);
    const _referralContract = new web3.eth.Contract(
      ReferralABI,
      CONFIG.HBTReferral
    );

    setReferralContract(_referralContract);
    setInitialized(true);
  };


  const claimReferralComission = async() => {
    setLoading(true)
    try {
      await referralContract.methods.claimReferralComission().send({ from: wallet.account })
      loadContractData()
      toast.success("Referral Comission Claimed");
    } catch (err) {
      
    }

    setLoading(false)
  }
  const loadContractData = async () => {
    if (wallet.account) {
      const myReferrer = await referralContract.methods
        .getReferrer(wallet.account)
        .call();
      const totalComissionEarnt = await referralContract.methods
        .referralComission(wallet.account)
        .call();
      const totalReferralCount = await referralContract.methods.referralsCount(
        wallet.account
      ).call;

      setInfo({
        myReferrer,
        totalComissionEarnt: totalComissionEarnt / 1e18,
        totalReferralCount: totalReferralCount / 1e18,
      });
      // const _purchaseInfo = await presaleContract.methods
      //   .purchaseInfo(wallet.account)
      //   .call();
      // const _pendingReward = await presaleContract.methods
      //   .getPendingReward(wallet.account)
      //   .call();
      // const _baseTime = await presaleContract.methods.baseTime().call();
      // console.log({ _purchaseInfo });
      // setPurchaseInfo(_purchaseInfo);
      // setPendingReward(_pendingReward / 1e18);
      // setBaseTime(_baseTime);
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
       <Desktop>
       <StyledCard>
          <InnerCard>  
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
        
        </InnerCard>
        </StyledCard>
        </Desktop>
      </>
    );
  };
  return (
    <>
      <Desktop>
        {wallet.account ? (
          <StyledCard>
            <InnerCard>
              <Heading
                Text="Referrals"
                size="40px"
                faktumFont
                ls="0.1rem"
                lg="35px"
                xm="27px"
                ms="27px"
              />
              <ReferalCode
                totalComissionEarned={info ? info.totalComissionEarnt : "0"}
              />
              {info != null ? <ReferalDetails info={info} /> : null}

              <Button
                loading={loading}
                onClick={() => {
                  claimReferralComission()
                }}
                Text={
                  comissionClaimEnabled
                    ? "Claim Referral Commissions"
                    : "Claim Not Enabled"
                }
                disabled={!comissionClaimEnabled}
                m="3rem 0 1rem 0"
              />
            </InnerCard>
          </StyledCard>
        ) : (
          ConnectWalletView()
        )}
      </Desktop>

      <Mobile>
        {wallet.account ? (
          <>
            <Heading
              Text="REFERRALS"
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
                <ReferalCode
                totalComissionEarned={info ? info.totalComissionEarnt : "0"}
                />
                {info ? <ReferalDetails info={info} /> : null}
                <Button  m="3rem 0 1rem 0"  onClick={() => {
                  claimReferralComission()
                }}
                Text={
                  comissionClaimEnabled
                    ? "Claim Referral Commissions"
                    : "Claim Not Enabled"
                }
                disabled={!comissionClaimEnabled} />
              </InnerCard>
            </StyledCard>
          </>
        ) : (
          ConnectWalletView()
        )}
      </Mobile>
    </>
  );
};

export default Card;
