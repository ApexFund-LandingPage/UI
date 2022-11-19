import React from 'react'
import styled from 'styled-components';
import theme from 'styled-theming';
import Tilt from 'react-parallax-tilt';
import { H, T } from '../../Page/Page2/Page2'
import { Button } from '../Navbar/Navbar';

export const backgroundColor = theme("theme", {
    light: "#000000",
    dark: "#E5E5E5",
  });  

  export const bColor = theme("theme", {
    light: "linear-gradient(to right, #36d1dc, #5b86e5)",
    dark: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
  });  

const Card = (props) => {
    const Box= styled.div`
     
        width: 24rem;  
        height: 30rem; 
       
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
       background-color: rgba(2, 169, 92, 0.75);
        margin: 2rem auto 0 auto;
        border-radius: 2rem 2rem 0 0 ;
       
        @media only screen and (max-width: 510px) {
            
            width: 98%;
            
        }
    `;
    const Upper = styled.div`
        height: 18rem;
        width: 100%;
        `;

    const Lower = styled.div`
       
        padding: 0 1rem;
        display: grid;
        place-items: center;
    `;

    return (
        <Box>
            <Upper>
                <img src={`${props.img ? props.img : ""}`} alt="" style={{width:"100%",height:"100%"}} />
            </Upper>
            <Lower>
                
                <H style={{color:'#FFFFFF',fontSize:'1.5rem',margin:'1.5rem 0',textAlign:'center'}}>
                            {props.name ? props.name : ""}                          
                </H>
                <Button style={{margin:'0 0 2rem 0',boxShadow:'none',color:'#000',
                 background: 'rgba(249,232,202,1)',border:'2px solid #000'
                 ,fontSize:'1.2rem',padding:'-0.4rem 1rem'}}>
                    {props.button ? props.button : 'Donate Now'} 

                    {/* <svg style={{margin:'0 0 0 1rem'}} width="28" height="11" viewBox="0 0 28 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M0.990234 4.78062C0.592929 4.78062 0.27085 5.1027 0.27085 5.5C0.27085 5.8973 0.592929 6.21938 0.990234 6.21938V4.78062ZM27.523 6.00868C27.804 5.72774 27.804 5.27226 27.523 4.99132L22.9449 0.413186C22.664 0.132249 22.2085 0.132249 21.9275 0.413186C21.6466 0.694123 21.6466 1.14961 21.9275 1.43055L25.997 5.5L21.9275 9.56945C21.6466 9.85039 21.6466 10.3059 21.9275 10.5868C22.2085 10.8678 22.664 10.8678 22.9449 10.5868L27.523 6.00868ZM0.990234 6.21938H27.0143V4.78062H0.990234V6.21938Z" fill="white"/>
                    </svg> */}

                </Button>
            </Lower>
            
        </Box>
    )
}

export default Card
