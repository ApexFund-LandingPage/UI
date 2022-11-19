import React from 'react'
import { Flex } from '../../buy/components/Flex'
import DetailBox from '../../claim/components/DetailBox'
import styled from 'styled-components'
import Line from '../../../components/Line/Line'

const Balance = () => {

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
    <CustomFlex>
      <DetailBox 
        heading="Current $HBT Balance"
        value="0000" big center
      />
      <Margin />
      <DetailBox 
        heading="Current $xHBT Balance"
        value="0000" big center
      />
      <Line bg="rgba(255,255,255,0.5)"
        width="0" w768="100%" height="0.5px"
        m="1rem 0 0 0"
      />
    </CustomFlex>
  )
}

export default Balance