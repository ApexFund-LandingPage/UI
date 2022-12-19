import React from 'react'
import styled from 'styled-components'

const Flex = ({children, column, scolumn, jc, m, mcolumn,lcolumn,width}) => {

  const StyledFlex = styled.div`
    display: flex;
    width: ${width ? width : '100%'};
    align-items: center;
    flex-direction : ${column ? 'column' : 'row'};
    justify-content : ${ jc ? jc : 'flex-start'};
    margin: ${ m ? m : '' };

    @media(max-width: 1100px){
      flex-direction : ${column || lcolumn ? 'column' : 'row'};
    }

    @media(max-width: 600px){
      flex-direction : ${column || lcolumn || mcolumn ? 'column' : 'row'};
    }

    @media(max-width: 450px){
      flex-direction : ${ column || lcolumn || mcolumn || scolumn ? 'column' : 'row'};
    }
  `

  return (
    <StyledFlex>
      {children}
    </StyledFlex>
  )
}

export default Flex