import React, { useState } from "react";
import DetailBox from "./DetailBox";
import { Flex } from "../../buy/components/Flex";
import Line from "../../../components/Line/Line";
import Button from "../../../components/Button/Button";
import styled from "styled-components";
import Heading from "../../../components/Heading/Heading";
import Spinner from "../../../components/Spinner";
import { useWallet } from "use-wallet";

const StyledReward = styled(Flex)`
  flex-direction: column;
  margin: 4rem 0 0 0;
`;
const Reward = ({ purchaseInfo, pendingReward, baseTime, presaleContract }) => {
  const [loading, setLoading] = useState(false);
  const wallet = useWallet();
  if (!purchaseInfo) {
    return <Spinner />;
  }

  const handleClaimReward = async () => {
    setLoading(true);
    try {
      await presaleContract.methods
        .harvestReward()
        .send({ from: wallet.account });
    } catch (err) {
      console.log("dssdsd",err)
    }
    setLoading(false);
  };

  return (
    <StyledReward>
      <Heading
        Text="Your Rewards"
        size="40px"
        faktumFont
        ls="0.1rem"
        lg="35px"
        xm="27px"
        ms="27px"
      />
      <Flex style={{ justifyContent: "space-around", margin: "2.75rem 0 0 0" }}>
        <DetailBox heading="Pending Rewards" value={pendingReward}             subText="$HBT"
 center />
        <DetailBox
          heading="Rewards Claimed"
          subText="$HBT"

          value={purchaseInfo.totalRewardClaimed / 1e18}
          center
        />
      </Flex>
      <Line m="2rem 0" bg="rgba(255, 255, 255, 0.4)" />
      <Button
        Text={Number(pendingReward) ==0?"No Rewards":"CLAIM REWARDS"}
        disabled={Number(pendingReward) ==0}
        loading={loading}
        onClick={async () => {
          await handleClaimReward();
        }}
      />
    </StyledReward>
  );
};

export default Reward;
