import React from 'react'
import styled from 'styled-components'


  const StyledHeading = styled.h1`
    font-size:${props=>props.size ? props.size : "36px"};
    font-weight: ${props=>props.fw ? props.fw : "700"};
    line-height: ${props=>props.lh ? props.lh : ""};
    color: ${props=>props.color ? props.color : "#ffffff"};
    font-family: ${props=>props.faktumFont ? "boldFont" : props.regular ? "regular" : "mortendFont"};
    //font-family: mortendFont;
    background: ${props=>props.gradient ? 'linear-gradient(#5E8CC9, #6166AE)' : null };
    -webkit-background-clip: ${props=>props.gradient ? 'text' : null };
    -webkit-text-fill-color: ${props=>props.gradient ? 'transparent' : null };
    margin: ${ props=>props.m ? props.m : '' };
    text-align: ${props=>props.center ? "center" : "left"} !important;
    letter-spacing: ${props=>props.ls ? props.ls : ''};
    text-decoration: none;

    @media only screen and (max-width: 1500px) {
      font-size:${props=>props.lg ? props.lg : "27px"};
    }

    @media only screen and (max-width: 1200px) {
      font-size:${props=>props.xm ? props.xm : "25px"};
    }

    @media only screen and (max-width: 768px) {
      font-size:${props=>props.ms? props.ms : "16px"};
    }
    `
const Heading = (props) => {


    
    return (
      <StyledHeading {...props}> 
        {props.Text ? props.Text : ""}
      </StyledHeading>
    )
}

export default Heading
