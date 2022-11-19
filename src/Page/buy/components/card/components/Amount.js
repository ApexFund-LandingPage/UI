import React from 'react'
import Flex from '../../../../../components/Styling/Flex'
import Button from '../../../../../components/Button/Button'
import Text from '../../../../../components/Text/Text'
import Input from '../../../../../components/Input/Input'
import Line from '../../../../../components/Line/Line'

const Amount = () => {

  return (
    <div style={{width:'90%',margin:'3rem 0 0 0'}}>
        <Flex jc="center" scolumn>
            <Button Text="-" 
                width="3rem" padding="0.55rem 0" br="50%" bg="#666666" 
                sm="0 0 1rem 0"
            />
            <Input 
                placeholder="Enter Amount"
                width="15rem" m="0 1rem"
            />
            <Button Text="+" 
                width="3rem" padding="0.55rem 0" br="50%"
                sm="1rem 0 0 0"
            />
        </Flex>
        <Text Text="0000 $HBT = 1 USDC" center m="0.75rem 0 0 0"/>
        <Line bg="#FFF" m="1.75rem 0"/>
    </div>
  )
}

export default Amount