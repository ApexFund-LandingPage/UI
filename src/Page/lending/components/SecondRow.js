import React from 'react'
import { Flex } from '../../buy/components/Flex'
import DetailBox from '../../claim/components/DetailBox'
import Line from '../../../components/Line/Line'
import styled from 'styled-components'
import Web3 from 'web3'

const SecondRow = ({interestIncurred=0,interestRate=0,interestFreeDays=0}) => {

  const CustomFlex = styled(Flex)`
    justify-content: space-between;
    margin: 2rem 0;

    @media(max-width: 768px){
      flex-direction: column;  
    }
  `

  return (
    <div style={{width:'100%'}}>
      <CustomFlex>
        <DetailBox 
          heading="Interest Incurred"
          value={Web3.utils.fromWei(interestIncurred.toString())} center
        />
        <DetailBox 
          heading="Interest Rate"
          value={`${interestRate}%`} NoHBT
          xx="2rem 0" center 
          m="0 0.9rem 0 0"
        />
        <DetailBox 
          heading="Interest Free Days"
          value={interestFreeDays} NoHBT
          center m="0 1.9rem 0 0"
        />
      </CustomFlex>
      <Line bg="rgba(255, 255, 255, 0.4)" />
    </div>
  )
}

export default SecondRow