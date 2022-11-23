import React from "react";
import styled from "styled-components";
import { Flex } from "../../buy/components/Flex";
import DetailBox from "../../claim/components/DetailBox";
import Line from "../../../components/Line/Line";
import Button from "../../../components/Button/Button";
import Heading from "../../../components/Heading/Heading";
import { useWallet } from "use-wallet";
import toast from "react-hot-toast";

const StyledReferal = styled(Flex)`
  flex-direction: column;
  margin: 4rem 0 0 0;

  @media (max-width: 768px) {
    margin: 0 0 0 0;
  }
`;


const ReferalCode = ({totalComissionEarned}) => {
  const wallet = useWallet();
  
  const copyMyReferrerLink = () => {
    const myLink = `${window.location.origin}?referrer=${wallet.account}`;

    const el = document.createElement("textarea");
    el.value = myLink;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    el.select();
    el.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(el);
    toast.success("Copied Your Referrer Link!");
  };

  return (
    <StyledReferal>

<Heading Text={"Your Referral Code"} 
                regular 
                size={ "20px"}
                lg = { "17px"}
                xm = { "16px"}
                ms = { "16px"}
            />
    <Button
            Text={"Copy Your Referrer Link"}
            lightBorder
            nav
            m={"10px"}
            onClick={() => {
              copyMyReferrerLink();
            }}
          />
      <DetailBox
        big
        center
        subText="$HBT"
        heading="Total Commissions Earned"
        value={totalComissionEarned}
        m="2rem 0 0 0"
      />
      <Line
        height="0.5px"
        m="1.25rem 0 0 0"
        bg="rgba(255,255,255,0.5)"
        width="0"
        w10="100%"
      />
    </StyledReferal>
  );
};

export default ReferalCode;
