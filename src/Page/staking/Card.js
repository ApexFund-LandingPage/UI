import React from 'react'
import { StyledCard, InnerCard, Desktop, Mobile } from '../lending/StyledCard'
import Balance from './components/Balance'
import BottomRow from './components/BottomRow'
import Heading from '../../components/Heading/Heading'
import ButtonContainer from './components/Button'
import StakeAmount from './components/StakeAmount'

const Card = () => {
  return (
    <>
    <Mobile>
      <Heading Text="STAKING" 
        size="40px" faktumFont ls="0.1rem" lg="35px" xm="27px" ms="27px" 
        m="0 0 1rem 0"
        />
    </Mobile>
    <StyledCard>
      <InnerCard>
        <Desktop>
          <Heading Text="Staking" 
            size="40px" faktumFont ls="0.1rem" lg="35px" xm="27px" ms="27px"
          />
        </Desktop>
        <Balance />
        <ButtonContainer />
        <StakeAmount />
        <BottomRow />
      </InnerCard>
    </StyledCard>
    </>
  )
}

export default Card