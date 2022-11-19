import React from 'react'
import DetailBox from './DetailBox'
import Flex from '../../../components/Styling/Flex'
import Line from '../../../components/Line/Line'
import Button from '../../../components/Button/Button'

const MobileStats = () => {

  return (
    <>
      <DetailBox big
       // m="2.5rem 0 0 0"
        heading="Total Balance" value="0000" center
      />
    
      <Flex jc = 'space-between' m="2rem 0 0 0">
        <DetailBox 
          heading="$HBT Bought" value="0000" center
        />
        <DetailBox 
          heading="$HBT Claimed" value="0000" center
        />
      </Flex>

      <Line m="2rem 0" bg="rgba(255, 255, 255, 0.4)"/>

      <Flex jc ='space-between'>
        <DetailBox 
          heading="Claimable $HBT" value="0000" center
        />
        <DetailBox 
          heading="$HBT Unvested" value="0000" center
        />
      </Flex>

      <Line m="2rem 0"  bg="rgba(255, 255, 255, 0.4)"/>

      <Flex jc="space-between" m="0 0 2rem 0" >
        <DetailBox 
          heading="Claimed Trenches" value="0000" center
        />
        <DetailBox 
          heading="Next Claim Time" value="0000" center
          time NoHBT
        />
      </Flex>

      <Button Text="claim $HBT" />
    </>
  )
}

export default MobileStats