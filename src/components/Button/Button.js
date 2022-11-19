import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion';

const Button = (props) => {

    const StyledButton = styled(motion.button)`
        color: ${ props.color ? props.color : "#FFFFFF" };
        font-size:${ props.nav ? '18px' : props.fontSize ? props.fontSize : "24px" } ;
        font-weight: ${ props.fw ? props.fw : "bold" } ;
        line-height: ${ props.noLineHeight ? "1" : "30px"} ;
        letter-spacing: ${props.ls ? props.ls : "0em" } ;
        padding: ${ props.nav ? "2px" : props.padding ? props.padding : "0.85rem 2rem"} ;
        border-radius: ${ props.br ? props.br : props.nav ? "1.45rem" : "0.55rem" };
        border: ${props.lightBorder ? "1.2px solid #FFFFFF" : "none"};
        cursor: pointer;
        min-width: ${ props.width ? props.width : props.navWidth ? props.navWidth : "15rem"};
        background: ${props.bg ? props.bg : "linear-gradient(107.64deg, #58A0D7 9.69%, #5E8CC9 29.52%, #6166AE 66.23%, #6C53A3 90.7%)"};
        margin: ${ props.m ? props.m : '' };
        text-transform: uppercase;
        font-family: boldFont;
        height: ${props.height ? props.height : ''};

        @media(max-width: 768px){
            max-width: ${ props.navSmall ? props.navSmall : props.navWidth ? props.navWidth : "15rem" };
        }

        @media(max-width: 450px){
            margin: ${ props.sm ? props.sm : '' };
        }

    `
    const ButtonInside = styled.div`
        background: #000;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: ${props.navBr ? props.navBr : "1.45rem"};
        padding: ${props.navP ? props.navP : '0 2rem'};
        height: ${props.Inheight ? props.Inheight : ''};

        @media(max-width: 768px){
            width: ${ props.sm ? props.sm : '' };
            padding: ${props.navPs ? props.navPs : props.navP ? props.navP : '0 2rem'};
        }
    `

    return (
        <StyledButton type="button" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.75 }}
        >
            { props.nav ? 
            <ButtonInside>
                {props.Text? props.Text : "Default Button"}
            </ButtonInside>
            :
                props.Text? props.Text : "Default Button"
            }
        </StyledButton>
    )
    }
export default Button;