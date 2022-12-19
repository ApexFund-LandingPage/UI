import React from 'react'
import Text from '../../../components/Text/Text'
import Heading from '../../../components/Heading/Heading'
import styled from 'styled-components'

const Head = () => {

  const StyledHead = styled.div`
    margin: 0 0 2rem 0;
    width: 30rem;

    @media only screen and (max-width: 1600px) {
      margin: 0 0 2rem 6vw;
    }

    @media(max-width: 768px){
      width: 95%;
    }
  `

  return (
    <StyledHead>
      <Text Text="EARN MORE" lg 
        size="16px"
      />
      <Heading Text="Referral Commissions"
        lh="50px" color="#150422" ls="0.2px" 
        m="0.5rem 0 1rem 0" fw="800"
        size="48px" lg="43px" sm="37px" ms="33px"
      />
      <Text Text="Earn 3% of your referral investment instantly to your wallet. Referring members also earn 5% of their referrals’ daily earnings as long as they keep their investment staked." 
        color="#737373" size="16px" ls="0.2px" fw="400" m="0.4px 0 0 0.5rem"
      />
    </StyledHead>
  )
}

export default Head