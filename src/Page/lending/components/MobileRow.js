import React from 'react'
import { Flex as NormalFlex} from '../../buy/components/Flex'
import DetailBox from '../../claim/components/DetailBox'
import Line from '../../../components/Line/Line'
import styled from 'styled-components'
import Flex from '../../../components/Styling/Flex'

const MobileRow = () => {

  const CustomFlex = styled(NormalFlex)`
    justify-content: space-between;

    @media(max-width: 768px){
      flex-direction: column;  
    }
  `

  return (
    <div style={{width:'100%'}}>
      <CustomFlex>
        <Flex jc = 'space-between' m = '.75rem 0 0 0'>
          <DetailBox 
            heading="Loanable $xHBT"
            value="0000" center
          />
          <DetailBox 
            heading="Loan Status"
            value="TAKEN" NoHBT
            //xx="2rem 0" 
            center
          />
        </Flex>

        <Line m="2rem 0" bg="rgba(255, 255, 255, 0.4)"/>

        <Flex jc = 'space-between' m = '.75rem 0 0 0' noCenter>
          <DetailBox 
            heading="Stake more to loan more!"
            NoHBT btn center
            value="Stake now"
          />
          <DetailBox 
            heading="Interest Incurred"
            value="0000" center  
            centerText mm="0 0 0 0.5rem"
          />
        </Flex>

        <Line m="2rem 0" bg="rgba(255, 255, 255, 0.4)"/>

        <Flex jc = 'space-between' m = '.75rem 0 0 0'>
          <DetailBox 
            heading="Interest Rate"
            value="0000 %" NoHBT
            //xx="2rem 0" 
            center
          />
          <DetailBox 
            heading="Interest Free Days"
            value="0000" NoHBT
            center
          />
        </Flex>

        <Line m="2rem 0" bg="rgba(255, 255, 255, 0.4)"/>

      </CustomFlex>
     
    </div>
  )
}

export default MobileRow