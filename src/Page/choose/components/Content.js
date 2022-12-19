import React from 'react'
import styled from 'styled-components'
import Heading from '../../../components/Heading/Heading'
import Text from '../../../components/Text/Text'
import phone from './phone.png'

const Content = (props) => {

    const ResponsiveContent = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin: 5rem 0 0 0;
        @media only screen and (max-width: 1200px) {
            width: 98%;
            flex-direction: column;
            align-items: center;
            margin: 2rem 0 0 0;
        }
    `
    const CustomWidth1 = styled.div`
        width: 25rem;
        margin: 0;
        padding: 2rem 4rem 2rem 2rem;
        background-color: rgba(118, 70, 233, 0.2);
        border-radius: 6px;
        border: 2px solid rgba(255, 255, 255, 0.8);

        @media only screen and (max-width: 768px) {
            width: 95%;
        }
    `

    const CustomWidth2 = styled.div`
        width: 25rem;
        margin: 0;
        padding: 2rem;
        background-color: rgba(118, 70, 233, 0.2);
        border-radius: 6px;
        border: 2px solid rgba(255, 255, 255, 0.8);

        @media(max-width: 1200px){
            margin: 4rem 0 2rem 0;
          }

    @media only screen and (max-width: 768px) {
        width: 95%;
    }
    
`

    const StyledImageContainer = styled.div`
        height: 45rem;
        width: 24rem;
        @media(max-width: 1400px){
            height: 40rem;
            width: 20rem;
          }
    @media(max-width: 1200px){
      margin: 4rem 0 0 0;
    }
  `

  return (
    <ResponsiveContent>
        <CustomWidth1>
            <Heading Text="Swapping" size="24px" 
                color="#ffffff"
            />
            <Text 
                color="rgba(255, 255, 255, 0.8)" size="20px" lh="24px" fw="400" m="1rem 0 0 0" xmsize="16px" msize="16px" ls="0.2px"
                Text="Take advantage of our decentralized exchange to swap your tokens from your mobile wallet. You’ll enjoy the best price and lowest possible fees" />
        </CustomWidth1>

        <StyledImageContainer>
            <img src={phone} alt="" style={{height:'100%',width:'100%'}} />
        </StyledImageContainer>

        <CustomWidth2>
            <Heading Text="Stake & Earn Capabilites" size="24px" 
                color="#FFFFFF"
            />
            <Text 
                color="rgba(255, 255, 255, 0.8)" size="20px" lh="24px" fw="400" xmsize="16px" msize="16px" ls="0.2px" m="1rem 0 0 0"
                Text="Stake a minimum of $100 from multiple chains and start earning profit immediately! After thirty days, you’re free to withdraw your capital, or you can choose to keep it in holding to continue making a profit." />
        </CustomWidth2>
    </ResponsiveContent>
  )
}

export default Content