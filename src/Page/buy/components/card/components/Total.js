import React from 'react'
import Text from '../../../../../components/Text/Text'
import { Flex } from '../../Flex'
import Button from '../../../../../components/Button/Button'

const Total = () => {

  return (
    <div>
        <Flex style={{justifyContent:'center'}}>
            <Text Text="Bonus:" size="24px" />
            <Text Text="0 $HBT" fw="bold" size="24px" m="0 0 0 1rem"/>
        </Flex>
        <Flex style={{justifyContent:'center',margin:'0.25rem 0 1.75rem 0'}}>
            <Text Text="Total:" size="24px" />
            <Text Text="0,000 $HBT" fw="bold" size="24px" m="0 0 0 1rem"/>
        </Flex>
        <Button Text="purchase" />
    </div>
  )
}

export default Total