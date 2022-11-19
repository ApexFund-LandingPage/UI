import React from 'react'
import { StyledCard, InnerCard, Desktop, Mobile } from './StyledCard'
import Stats from './components/Stats'
import Reward from './components/Reward'
import Heading from '../../components/Heading/Heading'
import MobileStats from './components/MobileStats'
import MobileRewards from './components/MobileRewards'

const Card = () => {
  return (
    <>
      <Desktop>
        <StyledCard>
          <InnerCard>
            <Stats />
            <Reward />
          </InnerCard>
        </StyledCard>
      </Desktop>

      <Mobile>
        <>
          <Heading Text="YOUR STATS" 
            size="40px" faktumFont ls="0.1rem" lg="35px" xm="27px" ms="27px"
            m="0 0 1rem 0"
          />
          <StyledCard>
            <InnerCard>
              <MobileStats />
            </InnerCard>
          </StyledCard>
        </>

        <>
          <Heading Text="YOUR REWARDS" 
            size="40px" faktumFont ls="0.1rem" lg="35px" xm="27px" ms="27px"
            m="3rem 0 1rem 0"
          />
          <StyledCard>
            <InnerCard>
              <MobileRewards />
            </InnerCard>
          </StyledCard>
        </>

      </Mobile>
    </>
  )
}

export default Card