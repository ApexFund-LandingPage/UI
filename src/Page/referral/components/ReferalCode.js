import React from 'react'
import styled from 'styled-components'
import { Flex } from '../../buy/components/Flex'
import DetailBox from '../../claim/components/DetailBox'
import Line from '../../../components/Line/Line'

const ReferalCode = () => {

    const StyledReferal = styled(Flex)`
      flex-direction: column;
      margin: 4rem 0 0 0;

      @media(max-width: 768px){
        margin: 0 0 0 0;
      }
    `

  return (
    <StyledReferal>
      <DetailBox big center NoHBT
        heading="Your Referral Code" 
        value="341230213"
      />
      <DetailBox big center
        heading="Total Commissions Earned"
        value="0000" m="2rem 0 0 0"
      />
      <Line height="0.5px" m="1.25rem 0 0 0" bg="rgba(255,255,255,0.5)"
        width="0" w10="100%"
      />
    </StyledReferal>
  )
}

export default ReferalCode