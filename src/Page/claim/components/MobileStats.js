import React, { useState }  from "react";
import DetailBox from "./DetailBox";
import Flex from "../../../components/Styling/Flex";
import Line from "../../../components/Line/Line";
import Button from "../../../components/Button/Button";
import { useWallet } from "use-wallet";
import Spinner from "../../../components/Spinner";
import moment from "moment"

const MobileStats = ({ purchaseInfo, presaleContract, presaleEndTime }) => {
  const wallet = useWallet();
  const [loading, setLoading] = useState(false);

  const isClaimable = () => {
    return !(
      purchaseInfo.totalHBTBought == 0 ||
      presaleEndTime == 0 ||
      presaleEndTime > Date.now() / 1000
    );
  };
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
      <DetailBox big heading="Total Balance"
        value={purchaseInfo.totalHBTBought / 1e18}
        subText=" $HBT"

 center />

      <Flex jc="space-between" m="2rem 0 0 0">
        <DetailBox   heading="USDC Paid"
            value={purchaseInfo.totalUSDCPaid / 1e6}
            center
            subText="USDC"  />
        <DetailBox heading="$HBT Claimed"
           value={purchaseInfo.totalHBTClaimed / 1e18}
           subText="$HBT" center />
      </Flex>

      <Line m="2rem 0" bg="rgba(255, 255, 255, 0.4)" />

      <Flex jc="space-between">
        <DetailBox heading="Claimable $HBT"  subText="$HBT"
            value={purchaseInfo.pendingClaimable / 1e18} center />
        <DetailBox heading="$HBT Unvested"
          subText="$HBT"  value={purchaseInfo.unvestedAmount / 1e18}
  center />
      </Flex>

      <Line m="2rem 0" bg="rgba(255, 255, 255, 0.4)" />

      <Flex jc="space-between" m="0 0 2rem 0">
        <DetailBox heading="Claimed Trenches"    value={purchaseInfo.claimedTrenches} center />
        <DetailBox heading="Next Claim Time" value={
              purchaseInfo.nextClaimTime != 0
                ? moment(purchaseInfo.nextClaimTime * 1000).format("DD-MM-YYYY")
                : "-"
            } center time NoHBT />
      </Flex>

      <Button
         loading={loading}
         disabled={!isClaimable() }
         onClick={() => {
           handleClaim();
         }}
        Text={isClaimable() ? "Claim $HBT" : "Claim Not Opened"}
 />
    </>
  );
};

export default MobileStats;
