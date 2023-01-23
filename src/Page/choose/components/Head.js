import React from 'react'
import Text from '../../../components/Text/Text'
import Heading from '../../../components/Heading/Heading'

const Head = () => {

  return (
    <div>
      <Text Text="WHY CHOOSE US"
        size="16px" center color="#FFFFFF"
      />
      <div style={{margin:'0.5rem 0 1rem 0'}}>
          <Heading Text="One-stop Solution for"
              lh="50px" color="#ffffff" ls="0.2px" 
              center    
              size="48px" lg="42px" sm="38px" ms="33px"
          />
      
        <Heading Text="All Your Crypto Needs"
            lh="50px" color="#ffffff" ls="0.2px" 
            center    
            size="48px" lg="42px" sm="38px" ms="33px"
        />
      </div>
      <Text Text="Simplify your life by trusting ApexPrime with:" 
        color="#E0E0E0" size="16px" ls="0.2px" fw="400" m="0.4px 0 0 0.5rem" center 
      />
    </div>
  )
}

export default Head