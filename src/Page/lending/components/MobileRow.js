import React from "react";
import { Flex as NormalFlex } from "../../buy/components/Flex";
import DetailBox from "../../claim/components/DetailBox";
import Line from "../../../components/Line/Line";
import styled from "styled-components";
import Flex from "../../../components/Styling/Flex";
import Web3 from "web3";

const MobileRow = ({
  loanableAmount = 0,
  isLoanTaken = false,
  interestIncurred = 0,
  interestRate = 0,
  interestFreeDays = 0,
}) => {
  const CustomFlex = styled(NormalFlex)`
    justify-content: space-between;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  `;

  return (
    <div style={{ width: "100%" }}>
      <CustomFlex>
        <Flex jc="space-between" m=".75rem 0 0 0">
          <DetailBox
            heading="Loanable $xHBT"
            subText="$xHBT"
            value={loanableAmount / 1e18}
            center
          />
          <DetailBox
            heading="Loan Status"
            // value="TAKEN"
            NoHBT
            value={isLoanTaken ? "TAKEN" : "NOT TAKEN"}
            //xx="2rem 0"
            center
          />
        </Flex>

        <Line m="2rem 0" bg="rgba(255, 255, 255, 0.4)" />

        <Flex jc="space-between" m=".75rem 0 0 0" noCenter>
          <DetailBox
            heading="Stake more to loan more!"
            NoHBT
            btn
            center
            onClick={() => {
              window.location = "/stake";
            }}
            value="Stake now"
          />
          <DetailBox
            heading="Interest Incurred"
            value={Web3.utils.fromWei(interestIncurred.toString())}
            center
            centerText
            mm="0 0 0 0.5rem"
          />
        </Flex>

        <Line m="2rem 0" bg="rgba(255, 255, 255, 0.4)" />

        <Flex jc="space-between" m=".75rem 0 0 0">
          <DetailBox
            heading="Interest Rate"
            value={`${interestRate}%`}
            NoHBT
            //xx="2rem 0"
            center
          />
          <DetailBox
            heading="Interest Free Days"
            value={interestFreeDays}
            NoHBT
            center
          />
        </Flex>

        <Line m="2rem 0" bg="rgba(255, 255, 255, 0.4)" />
      </CustomFlex>
    </div>
  );
};

export default MobileRow;
