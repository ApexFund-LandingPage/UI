import React from 'react'
import { StyledDownload, ButtonResponsive, CustomButton, Margin, Center } from './Styled'
import Text from '../../../../components/Text/Text'
import Heading from '../../../../components/Heading/Heading'

const Download = () => {

  return (
    <Center>
    <StyledDownload>
      <Text Text="Download now"
        size="16px" color="#FFF"
      />
      <Heading Text="Available for all device"
        lh="50px" color="#FFF" ls="0.2px" 
        m="0.5rem 0 1rem 0" fw="800"
        size="48px" lg="43px" sm="37px" ms="33px"
        center
        
      />
      <ButtonResponsive>
        <CustomButton>
            
            <svg style={{margin:'0 1rem 0 0'}} width="34" height="39" viewBox="0 0 34 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M28.0897 20.8317C28.0708 17.7169 29.5296 15.3694 32.4755 13.6384C30.8279 11.3549 28.3352 10.0989 25.0494 9.85686C21.9382 9.61937 18.5343 11.6106 17.288 11.6106C15.9708 11.6106 12.9588 9.93907 10.5888 9.93907C5.69785 10.0121 0.5 13.7115 0.5 21.2381C0.5 23.4623 0.920172 25.7596 1.76051 28.1254C2.88412 31.2402 6.93476 38.8718 11.1601 38.7485C13.3695 38.6983 14.9322 37.2322 17.8073 37.2322C20.5974 37.2322 22.0421 38.7485 24.5064 38.7485C28.7695 38.6891 32.433 31.7517 33.5 28.6278C27.7828 26.0199 28.0897 20.9915 28.0897 20.8317ZM23.1279 6.90192C25.5215 4.15251 25.3043 1.64972 25.2335 0.75C23.1185 0.868745 20.673 2.14297 19.2803 3.7095C17.7459 5.3902 16.8442 7.46825 17.0378 9.81119C19.3227 9.98017 21.4094 8.84295 23.1279 6.90192Z" fill="url(#paint0_linear_79_830)"/>
              <defs>
              <linearGradient id="paint0_linear_79_830" x1="26.5391" y1="4.90625" x2="4.3046" y2="32.5287" gradientUnits="userSpaceOnUse">
              <stop stop-color="#6B56DF"/>
              <stop offset="0.853739" stop-color="#BA4BFB"/>
              </linearGradient>
              </defs>
            </svg>

            <div>
                <Heading Text="Download on the" 
                    size="14px" lh="24px" lg="14px" xm="13px" ms="11px"
                    gradient="linear-gradient(214.95deg, #6B56DF 15.12%, #BA4BFB 75.31%)"
                />
                <Text Text="App Store"
                    size="20px" fw="400" lh="30px"
                    lg="linear-gradient(214.95deg, #6B56DF 15.12%, #BA4BFB 75.31%)"
                />
            </div>
        </CustomButton>
        <Margin />
        <CustomButton>
          <svg style={{margin:'0 1rem 0 0'}} width="36" height="39" viewBox="0 0 36 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_79_825)">
            <path d="M19.4614 18.9392L25.7233 12.6966L5.49765 1.36415C4.15718 0.642148 2.90141 0.540815 1.80023 1.33037L19.4614 18.9392ZM26.7906 26.2478L33.3002 22.5977C34.5708 21.8884 35.2675 20.8835 35.2675 19.7688C35.2675 18.6563 34.5708 17.6493 33.3024 16.9399L27.4089 13.6403L20.7744 20.2523L26.7906 26.2478V26.2478ZM0.711764 2.86515C0.576235 3.28104 0.5 3.74548 0.5 4.25426V35.2981C0.5 36.1025 0.677882 36.7949 0.999765 37.3459L18.1464 20.2502L0.711764 2.86515ZM19.4614 21.559L2.41012 38.5598C2.73624 38.6844 3.08776 38.7498 3.45835 38.7498C4.11906 38.7498 4.80729 38.5556 5.50823 38.1672L25.1071 27.1957L19.4614 21.559V21.559Z" fill="url(#paint0_linear_79_825)"/>
            </g>
            <defs>
            <linearGradient id="paint0_linear_79_825" x1="27.9337" y1="4.93232" x2="5.99561" y2="33.6687" gradientUnits="userSpaceOnUse">
            <stop stop-color="#6B56DF"/>
            <stop offset="0.853739" stop-color="#BA4BFB"/>
            </linearGradient>
            <clipPath id="clip0_79_825">
            <rect width="35" height="38.0001" fill="white" transform="translate(0.5 0.75)"/>
            </clipPath>
            </defs>
          </svg>

            <div>
                <Heading Text="Download on the" 
                    size="14px" lh="24px" lg="14px" xm="13px" ms="11px"
                    gradient="linear-gradient(214.95deg, #6B56DF 15.12%, #BA4BFB 75.31%)"
                />
                <Text Text="Google Play" 
                    size="20px" fw="400" lh="30px"
                    lg="linear-gradient(214.95deg, #6B56DF 15.12%, #BA4BFB 75.31%)"
                />
            </div>
        </CustomButton>
    </ButtonResponsive>
    </StyledDownload>
    </Center>
  )
}

export default Download