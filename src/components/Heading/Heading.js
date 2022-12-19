import React from 'react'
import styled from 'styled-components'

const Heading = (props) => {

  const StyledHeading = styled.h1`
    font-size:${props.size ? props.size : "36px"};
    font-weight: ${props.fw ? props.fw : "700"};
    line-height: ${props.lh ? props.lh : ""};
    color: ${props.color ? props.color : "#000000"};
    background: ${props.gradient ? 'linear-gradient(#5E8CC9, #6166AE)' : null };
    -webkit-background-clip: ${props.gradient ? 'text' : null };
    -webkit-text-fill-color: ${props.gradient ? 'transparent' : null };
    margin: ${ props.m ? props.m : '' };
    text-align: ${props.center ? "center" : "left"} !important;
    letter-spacing: ${props.ls ? props.ls : ''};

    @media only screen and (max-width: 1500px) {
      font-size:${props.lg ? props.lg : "27px"};
      line-height: ${props.lxh ? props.lxh : ""};
    }

    @media only screen and (max-width: 1300px) {
      font-size:${props.xm ? props.xm : "25px"};
      line-height: ${props.lsh ? props.lsh : ""};
    }

    @media only screen and (max-width: 768px) {
      font-size:${props.ms? props.ms : "16px"};
      line-height: ${props.lmh ? props.lmh : ""};
    }
    `
    
    return (
      <StyledHeading> 
        {props.Text ? props.Text : "Default Heading"}
      </StyledHeading>
    )
}

export default Heading
