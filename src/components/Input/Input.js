import React from 'react'
import styled from 'styled-components'
import Line from '../Line/Line'

const Input = (props) => {

    const StyledInput = styled.input`
        color: ${props.color ? props.color : '#FFFFFF'};
        font-size: 20px;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: 0.075em;
        text-align: center;  
        border: 2px solid #6166AE;
        border-radius: ${props.br ? props.br : '0.5rem'}; 
        background-color: #303030;
        margin: ${ props.m ? props.m : '' };
        height: ${props.height ? props.height: '3.5rem'};
        width: ${props.width? props.width : '12rem'};

        &:placeholder{
            color: #666666;
        }

        &:focus, &:focus{
            outline: none;
        }
    `

  return (
    
    <StyledInput placeholder={props.placeholder ? props.placeholder : "placeholder"} />
      
  )
}

export default Input