import React from 'react'
import Text from '../../../components/Text/Text'
import Heading from '../../../components/Heading/Heading'

const Head = () => {

  return (
    <div>
      <Text Text="ABOUT ApexPrime" lg 
        size="16px" center
      />
      <Heading Text="What to Expect"
        lh="72px" color="#150422" ls="0.2px" 
        m="0.5rem 0 1rem 0" center    
        size="72px" lg="60px" sm="52px" ms="45px"
      />
      <Text Text="As a member, you deserve the very best. Here’s what you can expect from ApexPrime:" 
        color="#505B6D" size="16px" ls="0.2px" fw="400" m="0.4px 0 0 0.5rem" center 
      />
    </div>
  )
}

export default Head