import React from 'react'
import { StyledCard, InnerCard } from './StyledCard'
import Bar from './components/Bar'
import Amount from './components/Amount'
import Total from './components/Total'

const Card = () => {
  return (
    <StyledCard>
        <InnerCard>
          <Bar />
          <Amount />
          <Total />
        </InnerCard>
    </StyledCard>
  )
}

export default Card