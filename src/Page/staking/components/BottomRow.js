import React from "react";
import { Flex } from "../../buy/components/Flex";
import DetailBox from "../../claim/components/DetailBox";
import Line from "../../../components/Line/Line";
import styled from "styled-components";

const BottomRow = ({ stakingInfo }) => {
  const CustomFlex = styled(Flex)`
    justify-content: space-between;
    margin: 2rem 0;

    @media (max-width: 544px) {
      flex-direction: column;
    }
  `;

  const getLoanStatus = () => {
    if (stakingInfo && stakingInfo.hasTakenLoan) {
      return "TAKEN";
    }
    return "NOT TAKEN";
  };

  const getxHBTAmount = () => {
    let hbtAmount = 0;
    if (
      stakingInfo &&
      Number(stakingInfo.amount) > 0 &&
      !stakingInfo.hasTakenLoan
    ) {
      return Number(stakingInfo.amount) / 1e18;
    }
    return hbtAmount;
  };
  return (
    <div style={{ width: "100%" }}>
      <Line bg="rgba(255, 255, 255, 0.4)" />
      <CustomFlex>
        <DetailBox
          subText="xHBT"
          heading="Loanable $xHBT"
          value={getxHBTAmount()}
          center
        />
        <DetailBox
          heading="Loan Status"
          value={getLoanStatus()}
          NoHBT
          center
          xm="2rem 0"
        />
        {/* <DetailBox 
              heading="Pending Rewards"
              value="0000" center
            /> */}
      </CustomFlex>
    </div>
  );
};

export default BottomRow;
