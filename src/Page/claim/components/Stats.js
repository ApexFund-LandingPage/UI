import React from 'react'
import DetailBox from './DetailBox'
import Flex from '../../../components/Styling/Flex'
import Line from '../../../components/Line/Line'
import Button from '../../../components/Button/Button'
import Heading from '../../../components/Heading/Heading'

const Stats = () => {

  return (
    <>
    <Flex column>
      <Heading Text="Your Stats" 
        size="40px" faktumFont ls="0.1rem" lg="35px" xm="27px" ms="27px"
      />
      <DetailBox big
        m="2.5rem 0 0 0"
        heading="Total Balance" value="0000" center
      />
      <Flex jc = 'space-between' m = '2.75rem 0 0 0' mcolumn>
        <DetailBox 
          heading="$HBT Bought" value="0000" center
        />
        <DetailBox 
          heading="$HBT Claimed" value="0000" mm="2rem 0" center
        />
        <DetailBox 
          heading="Claimable $HBT" value="0000" center
        />
      </Flex>
      <Line m="2rem 0" bg="rgba(255, 255, 255, 0.4)"/>
      <Flex jc ='space-between' mcolumn>
        <DetailBox 
          heading="$HBT Unvested" value="0000" center
        />
        <DetailBox 
          heading="Claimed Trenches" value="0000" mm="2rem 0" center
        />
        <DetailBox 
          heading="Next Claim Time" value="0000" center
          time NoHBT
        />
      </Flex>
      <Line m="2rem 0"  bg="rgba(255, 255, 255, 0.4)"/>
      <Button Text="claim $HBT" />
    </Flex>
    </>
  )
}

export default Stats