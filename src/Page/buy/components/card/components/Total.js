import React from "react";
import Text from "../../../../../components/Text/Text";
import { Flex } from "../../Flex";
import Button from "../../../../../components/Button/Button";
import { useWallet } from "use-wallet";

const Total = ({ isApproved, isParticipationOpen, total, bonus, isLoading,onClickPurchase }) => {
  
  const wallet = useWallet();

  const renderButtonText = () => {
    if (wallet.account) {
      if (isParticipationOpen) {
          return isApproved?"Purchase":"Approve Contract"
      } else {
        return "Not Opened"
      }
    }

    return "Connect Wallet"
  }

  const handleClick = () => {
    if (wallet.account) {
      onClickPurchase()
    } else {
      wallet.connect()

    }

  }
  return (
    <div>
      <Flex style={{ justifyContent: "center" }}>
        <Text Text="Bonus:" size="24px" />
        <Text Text={`${isNaN(bonus)?0:bonus} $HBT`} fw="bold" size="24px" m="0 0 0 1rem" />
      </Flex>
      <Flex style={{ justifyContent: "center", margin: "0.25rem 0 1.75rem 0" }}>
        <Text Text="Total:" size="24px" />
        <Text Text={`${isNaN(total)?0:total} $HBT`} fw="bold" size="24px" m="0 0 0 1rem" />
      </Flex>
      <Button
        loading={isLoading}
        Text={renderButtonText()}
        disabled={!isParticipationOpen}
        onClick={() => {
         handleClick()
        }}
      />




    </div>
  );
};

export default Total;
