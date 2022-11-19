import React from 'react'
import Heading from '../../../components/Heading/Heading'
import Button from '../../../components/Button/Button'
import { StyledStakeAmount,Absolute, Input, InputContainer } from './StyledStakeAmount'

const StakeAmount = () => {

  return (
    <StyledStakeAmount>
        <Heading Text='Stake amount ($HBT)'
            regular size="24px" m="0 0 0 0.25rem"
        />
        <InputContainer>
            <Input type='number' placeholder='' />
            <Absolute>
                <Button Text="MAX" nav br="0.5rem" navBr="0.5rem"
                    width="8rem" height="3.3rem" Inheight = "3.1rem"
                />
            </Absolute>
        </InputContainer>
        <Heading Text='00000 $HBT avaliable'
            regular size="16px" m="0 0 0 0.25rem"
        />
    </StyledStakeAmount>
  )
}

export default StakeAmount