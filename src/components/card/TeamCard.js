import React from 'react'
import styled from 'styled-components';
import theme from 'styled-theming';
import Tilt from 'react-parallax-tilt';
import frame from './Frame.png'
import { motion } from 'framer-motion';
import { T } from '../../Page/Page2/Page2'

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
        // height: 25rem; 
        width: 25rem;   
     
       
        margin: 2rem 0 0 0;
       cursor: grab;
       justify-self: center;
       @media only screen and (max-width: 500px) {
            // height: 300px; 
            width: 99%;  
      }
    `;
    const Upper = styled(motion.div)`
        height: 22rem;
        width: 100%;
       
    //     @media only screen and (max-width: 500px) {
    //         height: 284px; 
    //         width: 284x; 
          
    //   }
        `;

    const Lower = styled.div`
       
        
    `;


    return (
        <Box>

            <Upper
                whileHover={{ scale: 1.1,boxShadow:"0 0 25px #ff7b00"}}
            >
            
                <img src={`${props.img ? props.img : ""}`} alt="" style={{width:"100%",height:"100%"}} />
           
            </Upper>
            <Lower>
                <T style={{color:"rgba(2, 169, 92, 1)",fontSize:'1rem',margin:'1.5rem 0 1.5rem 0'}}>
                  {props.date ? props.date : '  04 August 2021'}  
                </T>
                <T style={{color:'rgba(34, 34, 34, 1)',fontSize:'1.1rem',fontWeight:'400',lineHeight:'1.4'}}>
                {props.desc? props.desc : '5 Ways on how technology can help your capital raise.'}  
                </T>
            </Lower>

        </Box>
    )
}

export default Card
