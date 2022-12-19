import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion';

const Button = (props) => {

    const StyledButton = styled(motion.button)`
        color: ${ props.color ? props.color : "#FFFFFF" };
        font-size:${ props.size ? props.size : '18px'} ;
        font-weight: ${ props.fw ? props.fw : "" } ;
        line-height: ${ props.noLineHeight ? "1" : "30px"} ;
        letter-spacing: ${props.ls ? props.ls : "0em" } ;
        padding: ${ props.nav ? "2px" : props.padding ? props.padding : "0.85rem 2rem"} ;
        border-radius: ${ props.br ? props.br : props.nav ? "1.45rem" : "0.55rem" };
        border: ${props.Border ? "2px solid #FFFFFF" : "none"};
        cursor: pointer;
        min-width: ${ props.width ? props.width : props.nav ? "13rem" : "15rem"};
        background: ${ props.noBg ? "transparent" : props.bg ? props.bg : "linear-gradient(214.95deg, #6B56DF 15.12%, #BA4BFB 75.31%)"};
        margin: ${ props.m ? props.m : '' };
        height: ${props.height ? props.height : ''};
        display: flex;
        align-items: center;

        @media(max-width: 450px){
            margin: ${ props.sm ? props.sm : '' };
        }

    `

    return (
        <StyledButton type="button" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.75 }}
        >
           {props.Text ? props.Text : 'Button'}
            <svg style={{margin:'0 0 0 0.75rem'}} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.01 17.6054C12.5716 17.1651 12.573 16.4528 13.0133 16.0144C13.4535 15.576 14.1658 15.5774 14.6043 16.0177L17.0562 18.4797V1.81348C17.0562 1.19216 17.5598 0.688477 18.1812 0.688477C18.8025 0.688477 19.3062 1.19216 19.3062 1.81348V18.4796L21.758 16.0177C22.1964 15.5774 22.9087 15.576 23.349 16.0144C23.7892 16.4528 23.7907 17.1652 23.3523 17.6054L18.9783 21.9974C18.7671 22.2094 18.4803 22.3285 18.1811 22.3285C17.882 22.3285 17.5951 22.2094 17.384 21.9974L13.01 17.6054Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5653 11.357C12.6223 11.9757 12.167 12.5235 11.5483 12.5805C8.94983 12.82 7.53846 13.4025 6.67514 14.5676C5.75182 15.8136 5.25 17.9814 5.25 21.9603C5.25 27.287 6.14769 29.339 7.74759 30.3218C8.6115 30.8524 9.81518 31.1643 11.5445 31.3252C13.2698 31.4857 15.3792 31.4868 18 31.4868C20.6208 31.4868 22.7302 31.4857 24.4555 31.3252C26.1848 31.1643 27.3885 30.8524 28.2524 30.3218C29.8523 29.339 30.75 27.287 30.75 21.9603C30.75 17.9814 30.2482 15.8136 29.3249 14.5676C28.4615 13.4025 27.0502 12.82 24.4517 12.5805C23.833 12.5235 23.3777 11.9757 23.4347 11.357C23.4918 10.7383 24.0396 10.283 24.6583 10.34C27.4298 10.5955 29.6785 11.2656 31.1326 13.228C32.5268 15.1095 33 17.9441 33 21.9603C33 27.285 32.1652 30.5588 29.4301 32.2389C28.1265 33.0397 26.5121 33.3936 24.6639 33.5655C22.823 33.7368 20.6115 33.7368 18.0474 33.7368H17.9526C15.3885 33.7368 13.177 33.7368 11.3361 33.5655C9.48795 33.3936 7.8735 33.0397 6.56991 32.2389C3.83481 30.5588 3 27.285 3 21.9603C3 17.9441 3.47318 15.1095 4.86736 13.228C6.32154 11.2656 8.57017 10.5955 11.3417 10.34C11.9604 10.283 12.5082 10.7383 12.5653 11.357Z" fill="white"/>
            </svg>
            
        </StyledButton>
    )
    }
export default Button;