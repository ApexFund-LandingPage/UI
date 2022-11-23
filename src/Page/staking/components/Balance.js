import React from 'react'
import { Flex } from '../../buy/components/Flex'
import DetailBox from '../../claim/components/DetailBox'
import styled from 'styled-components'
import Line from '../../../components/Line/Line'

const Balance = ({hbtBalance=0,xHBTBalance=0,pendingRewards=0,stakingInfo}) => {

  const CustomFlex = styled(Flex)`
    width: 85%;
    justify-content: space-between;
    margin: 2rem 0;

    @media(max-width: 768px){
      width: 98%;
      flex-direction: column;
    }

  `
  const Margin = styled.div`
    margin: 0;
    @media(max-width: 768px){
      margin: 2rem 0 0 0;
    }
  `

  return (
    <>
      <CustomFlex>
      <DetailBox 
        heading="Current $HBT Balance"
        value={(hbtBalance/1e18).toString()}
        subText={"$HBT"}
        big center
      />
      <Margin />
     

      <DetailBox 
        heading="Current $xHBT Balance"
       big center

        value={(xHBTBalance/1e18).toString()}
        subText={"$xHBT"}
      />
      <Line bg="rgba(255,255,255,0.5)"
        width="0" w768="100%" height="0.5px"
        m="1rem 0 0 0"
      />
      </CustomFlex>
    
      <CustomFlex>
      <DetailBox 
        heading="Staked $HBT Balance"
        value={stakingInfo?(stakingInfo.amount/1e18).toString():0}
        subText={"$HBT"}
        big center
      />
      <Margin />

        
      <DetailBox 
        heading="Pending Rewards"
       big center

        value={(pendingRewards/1e18).toString()}
        subText={"$HBT"}
      />
      <Line bg="rgba(255,255,255,0.5)"
        width="0" w768="100%" height="0.5px"
        m="1rem 0 0 0"
      />
    </CustomFlex></>
  )
}

export default Balance