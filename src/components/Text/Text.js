import React from 'react'
import styled from 'styled-components'

const Text = (props) => {

    const StyledText = styled.p`
        font-size:${props.size ? props.size : "22px"};
        color: ${props.color ? props.color : "#ffffff"};
        text-align: ${props.center ? "center" : "left"};
        letter-spacing: ${props.ls ? props.ls : "0em"};
        line-height: ${props.lh ? props.lh : "25px"};
        font-weight: ${props.fw ? props.fw : "bold"};
        margin: ${props.m ? props.m : ''};
        background: ${ props.lg ? 'linear-gradient(214.95deg, #6B56DF 15.12%, #BA4BFB 75.31%)' : '' } ;
        -webkit-background-clip: text;
        -webkit-text-fill-color: ${props.lg ? 'transparent' : ''};
        background-clip: text;
        text-fill-color: transparent;

        &:hover{
            color: ${props.hoverColor ? props.hoverColor : null};
        }

        @media only screen and (max-width: 1300px) {
            font-size:${props.xmsize ? props.xmsize : "20px"};
          }

        @media only screen and (max-width: 768px) {
            font-size:${props.msize ? props.msize : "17px"};
          }
    `
    
    return (
        <StyledText> 
            {props.Text ? props.Text : "Default Text"}
        </StyledText>
    )
}

export default Text