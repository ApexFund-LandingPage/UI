import React from 'react'
import Text from '../../../components/Text/Text'
import Heading from '../../../components/Heading/Heading'

const Head = () => {
  return (
    <div style={{margin:'0 0 2rem 0'}}>
      <Text Text="TESTOIMONIALS" lg 
        size="16px" center
      />
      <Heading Text="What People Say"
        lh="50px" color="#150422" ls="0.2px" 
        m="0.5rem 0 1rem 0" center fw="800"
        size="48px" lg="43px" sm="37px" ms="33px"
      />
      <Text Text="Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor tempor incididunt ut labore dolore magna." 
        color="#737373" size="16px" ls="0.2px" fw="400" m="0.4px 0 0 0.5rem" center 
      />
    </div>
  )
}

export default Head