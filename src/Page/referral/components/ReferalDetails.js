import React from 'react'
import styled from 'styled-components'
import { getHandsomeWalletAddress } from '../../../utils'
import { Flex } from '../../buy/components/Flex'
import DetailBox from '../../claim/components/DetailBox'


const StyledReferalDetail = styled(Flex)`
justify-content: space-between;
margin: 2rem 0 0 0;

@media(max-width: 1000px){
    flex-direction: column;
}
`

const ReferalDetails = ({info}) => {
    console.log({info})
    const {myReferrer,totalComissionEarnt,totalReferralCount} = info
  return (
    <StyledReferalDetail>
        <DetailBox 
            heading="Your Referrer"
              value={<a href="#">{getHandsomeWalletAddress(myReferrer)}</a>}
            NoHBT
        />
        <DetailBox 
            heading="Number of Referrals"
            value={totalReferralCount}
            NoHBT
            xm="2rem 0"
            center
        />
        {/* <DetailBox 
            heading="Referral Commissions Earned"
            value={totalComissionEarnt}
            center
        /> */}
    </StyledReferalDetail>
  )
}

export default ReferalDetails