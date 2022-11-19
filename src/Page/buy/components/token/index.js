import React from 'react'
import Heading from '../../../../components/Heading/Heading'
import { Flex } from '../Flex'
import Line from '../../../../components/Line/Line'
import coin from '../coin.png'
import Tilt from 'react-parallax-tilt';
import styled from 'styled-components'

const Tokken = () => {

    const StyledToken = styled.div`
        display: flex;
        flex-direction: column;
       align-items: center;
    `
    const Image = styled(Tilt)`
        height: 30rem;
        width: 25rem;
        margin: 1rem 0 0 0;

        @media(max-width: 450px){
            height: 25rem;
            width: 98%;
        }

    `

  return (
    <StyledToken>
        <Flex style={{justifyContent:'center'}}>
            {/* <svg width="43" height="52" viewBox="0 0 53 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M39.7161 0H25.8189L0 44.1618L6.81239 56.6244L14.306 44.1618H31.6094L15.6003 72H29.5656L53 31.9699L46.3239 19.4393L38.6262 31.9699H21.4589L39.7161 0Z" fill="url(#paint0_linear_224_351)"/>
                <defs>
                <linearGradient id="paint0_linear_224_351" x1="-0.218394" y1="-4.74576" x2="160.793" y2="-149.39" gradientUnits="userSpaceOnUse">
                <stop stop-color="#60A3EE"/>
                <stop offset="1" stop-color="#7232E1"/>
                </linearGradient>
                </defs>
            </svg> */}
            <Heading Text="$HBT" gradient size="60px" m="1rem 1rem 0 1rem" lg="50px" xm="40px" ms="25px"/>
            <Heading Text="Token" size="60px" m="1rem 0 0 0" lg="50px" xm="40px" ms="25px" />
        </Flex>
        <Line height="2px" m="0 0 0 0" w16="19rem" m16="0.5rem 0 0 0" w12="16rem"/>
        <Image>
            <img src={coin} alt="" style={{width:'100%',height:'100%'}} />
        </Image>
    </StyledToken>
  )
}

export default Tokken