import React from 'react'
import styled from 'styled-components'
import { Flex } from '../../buy/components/Flex'
import DetailBox from '../../claim/components/DetailBox'

const ReferalDetails = () => {

    const StyledReferalDetail = styled(Flex)`
        justify-content: space-between;
        margin: 2rem 0 0 0;

        @media(max-width: 1000px){
            flex-direction: column;
        }
    `

  return (
    <StyledReferalDetail>
        <DetailBox 
            heading="Your Referrer"
            value="0x3456...7e8D"
            NoHBT
        />
        <DetailBox 
            heading="Number of Referrals"
            value="00"
            NoHBT
            xm="2rem 0"
            center
        />
        <DetailBox 
            heading="Referral Commissions Earned"
            value="0000"
            center
        />
    </StyledReferalDetail>
  )
}

export default ReferalDetails