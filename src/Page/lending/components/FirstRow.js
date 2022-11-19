import React from 'react'
import { Flex } from '../../buy/components/Flex'
import DetailBox from '../../claim/components/DetailBox'
import Line from '../../../components/Line/Line'
import styled from 'styled-components'

const FirstRow = () => {

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
              heading="Loanable $xHBT"
              value="0000" center
            />
            <DetailBox 
              heading="Loan Status"
              value="TAKEN" NoHBT
              xx="2rem 0" center
            />
            <DetailBox 
              heading="Stake more to loan more!"
              NoHBT btn center
              value="Stake now"
            />
        </CustomFlex>
        <Line bg="rgba(255, 255, 255, 0.4)" />
    </div>
  )
}

export default FirstRow