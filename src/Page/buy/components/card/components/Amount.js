import React, { useState } from "react";
import Flex from "../../../../../components/Styling/Flex";
import Button from "../../../../../components/Button/Button";
import Text from "../../../../../components/Text/Text";
import Input from "../../../../../components/Input/Input";
import Line from "../../../../../components/Line/Line";

const Amount = ({ tokenPrice, onInputAmountChanged, value }) => {


  return (
    <div style={{ width: "90%", margin: "3rem 0 0 0" }}>
      <Flex jc="center" scolumn>
        <Button
          onClick={() => {
            console.log("qwqqw",value)
            if (Number(value) > 0) {
              onInputAmountChanged(Number(value)-1);
            }
          }}
          Text="-"
          width="3rem"
          padding="0.55rem 0"
          br="50%"
          bg="#666666"
          sm="0 0 1rem 0"
        />
        <Input
          type={"number"}
          value={value}
          onChange={(e) => {
            onInputAmountChanged(e.target.value);
          }}
          placeholder="Enter Amount"
          width="15rem"
          m="0 1rem"
        />


        <Button
          onClick={() => {

            onInputAmountChanged(Number(value)+1);

          }}
          Text="+"
          width="3rem"
          padding="0.55rem 0"
          br="50%"
          sm="1rem 0 0 0"
        />
      </Flex>
      <Text
        Text={`1 $HBT = ${tokenPrice} USDC`}
        center
        m="0.75rem 0 0 0"
      />
      <Line bg="#FFF" m="1.75rem 0" />
    </div>
  );
};

export default Amount;
