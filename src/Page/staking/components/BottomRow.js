import React from 'react'
import { Flex } from '../../buy/components/Flex'
import DetailBox from '../../claim/components/DetailBox'
import Line from '../../../components/Line/Line'
import styled from 'styled-components'

const BottomRow = () => {

  const CustomFlex = styled(Flex)`
    justify-content: space-between;
    margin: 2rem 0;

    @media(max-width: 544px){
      flex-direction: column;  
    }
  `

  return (
    <div style={{width:'100%'}}>
        <Line bg="rgba(255, 255, 255, 0.4)" />
        <CustomFlex>
            <DetailBox 
              heading="Loanable $xHBT"
              value="0000" center
            />
            <DetailBox 
              heading="Loan Status"
              value="TAKEN" NoHBT center 
              xm="2rem 0"
            />
            <DetailBox 
              heading="Pending Rewards"
              value="0000" center
            />
        </CustomFlex>
    </div>
  )
}

export default BottomRow