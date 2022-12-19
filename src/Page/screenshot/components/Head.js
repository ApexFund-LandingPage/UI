import React from 'react'
import Text from '../../../components/Text/Text'
import Heading from '../../../components/Heading/Heading'

const Head = () => {
  return (
    <div style={{margin:'0 0 2rem 0'}}>
      <Text Text="SCREENSHOTS" lg 
        size="16px" center
      />
      <Heading Text="Amazing visual interface"
        lh="50px" color="#150422" ls="0.2px" 
        m="0.5rem 0 1rem 0" center fw="800"
        size="48px" lg="43px" sm="37px" ms="33px"
      />
      <Text Text="As a member, you deserve the very best. Here’s what you can expect from ApexFund:" 
        color="#737373" size="16px" ls="0.2px" fw="400" m="0.4px 0 0 0.5rem" center 
      />
    </div>
  )
}

export default Head