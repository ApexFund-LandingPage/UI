import React from 'react'
import { StyledCard, InnerCard, Desktop, Mobile} from './StyledCard'
import Button from '../../components/Button/Button'
import Heading from '../../components/Heading/Heading'
import { Flex } from '../buy/components/Flex'
import FirstRow from './components/FirstRow'
import SecondRow from './components/SecondRow'
import MobileRow from './components/MobileRow'

const Card = () => {
  return (
    <>
      <Desktop>
        <StyledCard>
          <InnerCard>
            <Heading Text="Lending/Borrowing" 
              size="40px" faktumFont ls="0.1rem" lg="35px" xm="27px" ms="27px"
            />
            <Flex style={{justifyContent:'center',margin:'1.5rem 0 0 0'}} >
              <Heading regular Text="Loan Period: " size="24px" />
              <Heading Text="OPEN" gradient size="32px" 
              faktumFont ls="0.1rem" m="0 0 0 0.5rem"/>
            </Flex>
            <FirstRow />
            <SecondRow />
            <Button Text="TAKE LOAN"
              m="2rem 0 0 0"
            />
          </InnerCard>
        </StyledCard>
      </Desktop>

      <Mobile>
        <Heading Text="LENDING/BORROWING" 
          size="40px" faktumFont ls="0.1rem" lg="35px" xm="27px" ms="27px"
          m="0 0 1rem 0"
        />
        <StyledCard>
          <InnerCard>
            <Flex style={{justifyContent:'center',flexDirection:'column'}} >
              <Heading regular Text="Loan Period: " 
                size="24px" lg="22px" xm="20px" ms="18px"
              />
              <Heading Text="OPEN" gradient 
                size="32px" lg="30px" xm="28px" ms="26px"
                faktumFont ls="0.1rem" m="0 0 0 0.5rem"
              />
            </Flex>
            <MobileRow />
            <Button Text="TAKE LOAN"
              m="2rem 0 0 0"
            />
          </InnerCard>
        </StyledCard>
      </Mobile>
    </>
  )
}

export default Card