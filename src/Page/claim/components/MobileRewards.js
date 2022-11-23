import React from 'react'
import DetailBox from './DetailBox'
import { Flex } from '../../buy/components/Flex'
import Line from '../../../components/Line/Line'
import Button from '../../../components/Button/Button'
import styled from 'styled-components'

const StyledReward = styled(Flex)`
flex-direction: column;
// margin: 4rem 0 0 0;
`

const MobileRewards = () => {


  return (
    <StyledReward>

        <DetailBox big
           // m="2.5rem 0 0 0"
            heading="Total Balance" value="0000" center
        />
      
      <Flex style={{justifyContent:'space-around',margin:'2rem 0 0 0'}}>
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

export default MobileRewards