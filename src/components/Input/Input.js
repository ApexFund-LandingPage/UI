import React from 'react'
import styled from 'styled-components'
import Line from '../Line/Line'


const StyledInput = styled.input`
        color: ${props=>props.color ? props.color : '#FFFFFF'};
        font-size: 20px;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: 0.075em;
        text-align: center;  
        border: 2px solid #6166AE;
        border-radius: ${props=>props.br ? props.br : '0.5rem'}; 
        background-color: #303030;
        margin: ${ props=>props.m ? props.m : '' };
        height: ${props=>props.height ? props.height: '3.5rem'};
        width: ${props=> props.width? props.width : '12rem'};

        &:placeholder{
            color: #666666;
        }

        &:focus, &:focus{
            outline: none;
        }
    `


const Input = (props) => {

    

  return (
    
    <StyledInput {...props} placeholder={props.placeholder ? props.placeholder : "placeholder"} />
      
  )
}

export default Input