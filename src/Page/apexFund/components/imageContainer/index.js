import React from 'react'
import styled from 'styled-components'
import phone from './phone.png'
import { motion } from 'framer-motion'

const ImageContainer = () => {

  const StyledImageContainer = styled(motion.div)`
    margin: 0;
    height: 42rem;
    width: 22rem;
    @media(max-width: 1300px){
      height: 38rem;
    width: 20rem;
    }
    @media(max-width: 1000px){
      margin: 4rem 0 0 0;
    }
  `

  return (
    <StyledImageContainer
      initial={{ x: 0, y:0}}
      animate={{ x: 0, y: -15 }}
      transition={{ duration: 1, repeat: Infinity ,repeatType: "reverse",
    }}
    >
      <img src={phone} alt="" style={{height:'100%',width:'100%'}} />
    </StyledImageContainer>
  )
}

export default ImageContainer