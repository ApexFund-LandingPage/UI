import React from 'react'
import styled from 'styled-components'
import Heading from '../../../components/Heading/Heading'
import Text from '../../../components/Text/Text'
import img from './hbg.png'

const Content = (props) => {

    const ResponsiveContent = styled.div`
        display: flex;
        justify-content: space-between;
        width: 888px;
        margin: 5rem 0 0 0;
        @media only screen and (max-width: 900px) {
            width: 98%;
            flex-direction: column;
            align-items: center;
            margin: 2rem 0 0 0;
        }
    `
    const CustomWidth = styled.div`
        width: 25rem;
        margin: 0;

        @media only screen and (max-width: 768px) {
            width: 95%;
        }
      
    `
    const Margin = styled.div`
        margin: 0;
        @media only screen and (max-width: 900px) {
            margin: 2rem 0 0 0;
        }
    `
    const Image = styled.div`
        background-image: url('${img}');
        background-size: 12rem 100%;
        background-position: center center;
        background-repeat: no-repeat;
        height: 6rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column; 
  `

  return (
    <ResponsiveContent>
        <CustomWidth>
            <Image>
                <Heading Text="Safe Profits" size="28px" 
                   // center m="2rem 0 0 0"
                />
            </Image>
            <Text 
                color="#150422" size="16px" lh="24px" fw="400" m="2rem 0 0 0" xmsize="16px" msize="16px"
                Text="As the world faces recession and financial challenges, ApexFund is able to help its users generate safe & secure profits. Our team takes care to use the most secure trading strategies in order to minimize any risk involved with the trading process. In this way, we produce consistently safe profits. Rest assured that all trades are placed and thoroughly analysed by actual human beings. We never rely on bots or AI trading." />
        </CustomWidth>

        <Margin />

        <CustomWidth m="2rem 0 0 0">
            <Image>
                <Heading Text="Complete" size="28px" 
                    center  
                />
                <Heading Text="Transparency" size="28px" 
                    center lh="0.75"
                />
            </Image>
            <Text 
                color="#150422" size="16px" lh="24px" fw="400" m="3rem 0 0 0" xmsize="16px" msize="16px"
                Text="We believe in 100% transparency with our members. We never want you to wonder about whether or not your profits are legitimate or if they’re coming from money rotation from other members. This is why we allow you total access to our real-time trading history so you can see the trades we are completing in the market each day. " />
        </CustomWidth>
    </ResponsiveContent>
  )
}

export default Content