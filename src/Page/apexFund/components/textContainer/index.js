import React from 'react'
import styled from 'styled-components'
import Text from '../../../../components/Text/Text';
import Heading from '../../../../components/Heading/Heading'
import Svg from './svg';
import Flex from '../../../../components/Styling/Flex'
import Button from '../../../../components/Button/Button';

const TextContainer = () => {

    const StyledToken = styled.div`
      display: flex;
      flex-direction: column;
      width: 30rem;

      @media(max-width: 768px){
        width: 95% !important;
      }
    `

  return (
    <StyledToken>
        <div style={{width:'16rem'}}>
          <Text Text="MOST SECURE CRYPTO WALLET" lg />
        </div>
        <Heading Text="ApexFund Reviving Defi"
          m="0.5rem 0 1rem 0" lh="96px" lxh="80px" lsh="60px" lmh="50px"
          color="#150422" ls="0.2px" 
          size="90px" lg="75px" xm="65px" ms="50px"
        />
        <div>
          <Flex m="1rem 0 0 0">
            <Svg />
            <Text Text="Top Tier Security for holding your crypto" 
              color="#505B6D" size="20px" ls="0.2px" fw="400" m="0.4px 0 0 0.5rem"
            />
          </Flex>

          <Flex m="0.5rem 0 0 0">
            <Svg />
            <Text Text="Generous perks for using Wallet" 
              color="#505B6D" size="20px" ls="0.2px" fw="400" m="0.4px 0 0 0.5rem"
            />
          </Flex>

          <Flex m="0.5rem 0 0 0">
            <Svg />
            <Text Text="Stake & Earn up to 1.60% daily" 
              color="#505B6D" size="20px" ls="0.2px" fw="400" m="0.4px 0 0 0.5rem"
            />
          </Flex>

          <Flex m="0.5rem 0 0 0">
            <Svg />
            <Text Text="Lucrative Referral commission" 
              color="#505B6D" size="20px" ls="0.2px" fw="400" m="0.4px 0 0 0.5rem"
            />
          </Flex>

          <Flex m="0.5rem 0 0 0">
            <Svg />
            <Text Text="Fully sustainable by Real Trading" 
              color="#505B6D" size="20px" ls="0.2px" fw="400" m="0.4px 0 0 0.5rem"
            />
          </Flex>

          <Flex m="0.5rem 0 0 0">
            <Svg />
            <Text Text="Real-Time Trading Stats" 
              color="#505B6D" size="20px" ls="0.2px" fw="400" m="0.4px 0 0 0.5rem"
            />
          </Flex>
        </div>
        <Button Text="Download App & Start Generating Profits" 
          br="2rem" m="2rem 0 0 0"
        />
    </StyledToken>
  )
}

export default TextContainer