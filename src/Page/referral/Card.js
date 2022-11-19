import React from 'react'
import { StyledCard, InnerCard, Desktop, Mobile } from './StyledCard'
import Button from '../../components/Button/Button'
import ReferalCode from './components/ReferalCode'
import ReferalDetails from './components/ReferalDetails'
import Heading from '../../components/Heading/Heading'

const Card = () => {
  return (
    <>
      <Desktop>
        <StyledCard>
          <InnerCard>
            <Heading Text="Referrals" 
              size="40px" faktumFont ls="0.1rem" lg="35px" xm="27px" ms="27px"
            />
            <ReferalCode />
            <ReferalDetails />
            <Button Text="Claim Referral Commissions"
              m="3rem 0 1rem 0"
            />
          </InnerCard>
        </StyledCard>
      </Desktop>

      <Mobile>
        <>
          <Heading Text="REFERRALS" 
            size="40px" faktumFont ls="0.1rem" lg="35px" xm="27px" ms="27px"
            m="0 0 1rem 0"
          />
          <StyledCard>
            <InnerCard>
              <ReferalCode />
              <ReferalDetails />
              <Button Text="Claim Referral Commissions"
                m="3rem 0 1rem 0"
              />
            </InnerCard>
          </StyledCard>
        </>
      </Mobile>
    </>
  )
}

export default Card