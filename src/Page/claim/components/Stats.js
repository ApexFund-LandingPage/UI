import React, { useState } from "react";
import DetailBox from "./DetailBox";
import Flex from "../../../components/Styling/Flex";
import Line from "../../../components/Line/Line";
import Button from "../../../components/Button/Button";
import Heading from "../../../components/Heading/Heading";
import Spinner from "../../../components/Spinner";
import moment from "moment";
import { useWallet } from "use-wallet";

const Stats = ({ purchaseInfo, presaleContract ,presaleEndTime}) => {
  const wallet = useWallet();
  const [loading, setLoading] = useState(false);


  const isClaimable = () => {
    return           ! ( purchaseInfo.totalHBTBought == 0 || presaleEndTime == 0 || presaleEndTime > (Date.now() / 1000))

  }
  const handleClaim = async () => {


    setLoading(true);
    try {
      await presaleContract.methods.claim().send({ from: wallet.account });
    } catch (err) {}
    setLoading(false);
  };
  if (!purchaseInfo) {
    return <Spinner />;
  }



  return (
    <>
      <Flex column>
        <Heading
                Text="YOUR STATS "
                size="40px"
          faktumFont
          ls="0.1rem"
          lg="35px"
          xm="27px"
          
          ms="27px"
        />
        <DetailBox
          big
          m="2.5rem 0 0 0.5rem"
          heading="Total Balance"
          subText=" $HBT"
          value={purchaseInfo.totalHBTBought / 1e18}
          center
        />
        <Flex jc="space-between" m="2.75rem 0 0 0" mcolumn>
          <DetailBox
            heading="USDC Paid"
            value={purchaseInfo.totalUSDCPaid / 1e6}
            center
            subText="USDC"
          />
          <DetailBox
            heading="$HBT Claimed"
            mm="2rem 0"
            center
            value={purchaseInfo.totalHBTClaimed / 1e18}
            subText="$HBT"
          />
          <DetailBox
            heading="Claimable $HBT"
           
            center
            subText="$HBT"
            value={purchaseInfo.pendingClaimable / 1e18}
          />
        </Flex>
        <Line m="2rem 0" bg="rgba(255, 255, 255, 0.4)" />
        <Flex jc="space-between" mcolumn>
          <DetailBox heading="$HBT Unvested"
          subText="$HBT"  value={purchaseInfo.unvestedAmount / 1e18}
 center />
          <DetailBox
            heading="Claimed Trenches"
            value={purchaseInfo.claimedTrenches}
            mm="2rem 0"
            center
          />
          <DetailBox
            heading="Next Claim Time"
            value={
              purchaseInfo.nextClaimTime != 0
                ? moment(purchaseInfo.nextClaimTime * 1000).format("DD-MM-YYYY")
                : "-"
            }
            center
            NoHBT
          />
        </Flex>
        <Line m="2rem 0" bg="rgba(255, 255, 255, 0.4)" />
        <Button
          Text={isClaimable()?"Claim $HBT":"Claim Not Opened"}
          loading={loading}
          disabled={!isClaimable() }
          onClick={() => {
            handleClaim();
          }}
        />
      </Flex>
    </>
  );
};

export default Stats;
