import React, { useState } from "react";
import Heading from "../../../components/Heading/Heading";
import Button from "../../../components/Button/Button";
import {
  StyledStakeAmount,
  Absolute,
  Input,
  StyledInput,
  InputContainer,
} from "./StyledStakeAmount";

const StakeAmount = ({
  hbtBalance = 0,
  stakedAmount = 0,
  isStakeMode = true,
  hasApprovedStaking = false,
  loading = false,
  onClick,
  onStakingInput
}) => {
  const [inputAmount, setInputAmount] = useState();
  const renderButtonText = () => {
    if (isStakeMode) {
      if (!hasApprovedStaking) {
        return "Approve Contract";
      } else {
        return "Stake";
      }
    } else {
      return "Unstake";
    }
  };

  return (
    <StyledStakeAmount>
      <Heading
        Text={`${isStakeMode ? "Stake" : "Unstake"} amount ($HBT)`}
        regular
        size="24px"
        m="0 0 0 0.25rem"
      />
      <InputContainer>
        <StyledInput
          type="number"
          onChange={(t) => {
            setInputAmount(t.target.value);
            onStakingInput(t.target.value)
          }}
          value={inputAmount}
        />
        <Absolute>
          <Button
            onClick={() => {
              setInputAmount(
                isStakeMode ? hbtBalance / 1e18 : stakedAmount / 1e18
              );
            }}
            Text="MAX"
            nav
            br="0.5rem"
            navBr="0.5rem"
            width="8rem"
            height="3.3rem"
            Inheight="3.1rem"
          />
        </Absolute>
      </InputContainer>
      <Heading
        Text={`${
          isStakeMode ? hbtBalance / 1e18 : stakedAmount / 1e18
        } $HBT Available to ${isStakeMode ? "Stake" : "Unstake"}`}
        regular
        size="16px"
        m="0 0  0.5rem  0.25rem"
      />

      <div style={{alignContent:"center",alignItems:"center",textAlignLast:"center"}}>
      <Button Text={renderButtonText()}
        width={"50%"}
        loading={loading} onClick={() => { onClick() }} />
      </div>
    </StyledStakeAmount>
  );
};

export default StakeAmount;
