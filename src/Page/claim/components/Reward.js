import React from 'react'
import DetailBox from './DetailBox'
import { Flex } from '../../buy/components/Flex'
import Line from '../../../components/Line/Line'
import Button from '../../../components/Button/Button'
import styled from 'styled-components'
import Heading from '../../../components/Heading/Heading'

const Reward = () => {

  const StyledReward = styled(Flex)`
    flex-direction: column;
    margin: 4rem 0 0 0;
  `

  return (
    <StyledReward>
      <Heading Text="Your Rewards" 
        size="40px" faktumFont ls="0.1rem" lg="35px" xm="27px" ms="27px"
      />
      <Flex style={{justifyContent:'space-around',margin:'2.75rem 0 0 0'}}>
        <DetailBox 
          heading="Pending Rewards" value="0000" center
        />
        <DetailBox 
          heading="Rewards Claimed" value="0000" center
        />
      </Flex>
      <Line m="2rem 0" bg="rgba(255, 255, 255, 0.4)"/>
      <Button Text="CLAIM REWARDS" />
    </StyledReward>
  )
}

export default Reward