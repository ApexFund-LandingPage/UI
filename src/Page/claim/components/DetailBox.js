import React from 'react'
import { Flex } from '../../buy/components/Flex'
import Heading from '../../../components/Heading/Heading'
import styled from 'styled-components'
import Button from '../../../components/Button/Button'

const DetailBox = (props) => {

    const StyledBox = styled.div`
        margin: ${props.m ? props.m : ''};

        @media(max-width: 1000px){
            margin : ${props.xm ? props.xm : ''};
        }

        @media(max-width: 768px){
            margin : ${ props.xm ? props.xm : props.xx ? props.xx : ''};
        }

        @media(max-width: 600px){
            margin : ${ props.xm ? props.xm : props.xx ? props.xx : props.mm ? props.mm : ''};
        }
    `

  return (
    <StyledBox>
        <Flex style={{justifyContent: props.center ? 'center' : 'flex-start'}} >
            <Heading Text={props.heading ? props.heading : 'Total Balance'} 
                regular center={props.centerText ? true : false }
                size={props.big ? "28px" : "20px"}
                lg = {props.big ? "24px" : "17px"}
                xm = {props.big ? "22px" : "16px"}
                ms = {props.big ? "22px" : "16px"}
            />
            <svg style={{margin:'0 0 0 0.3rem',display: props.btn ? 'none' :'block'}} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.99992 7.66667V11M7.99992 5.00667L8.00659 4.99933M7.99992 14.6667C11.6819 14.6667 14.6666 11.682 14.6666 8C14.6666 4.318 11.6819 1.33333 7.99992 1.33333C4.31792 1.33333 1.33325 4.318 1.33325 8C1.33325 11.682 4.31792 14.6667 7.99992 14.6667Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </Flex>
        <Flex style={{justifyContent: `${props.center ? 'center': 'flex-start' }`,display: props.btn ? 'none' :'flex' }}>
            <Heading Text={props.value && props.time ? '00:00:00' : props.value ? props.value :'0000'}
                gradient size={props.big ? "48px" : "30px"}
                m={props.big ? "1rem 0 0 0" : "0.5rem 0 0 0" }
                faktumFont ls={ props.big ? "0.2rem" : "0.1rem"}
                lg = {props.big ? "42px" : "26px"}
                xm = {props.big ? "36px" : "22px"}
                ms = {props.big ? "30px" : "20px"}
                right
            />
            { props.NoHBT ? null :
                <Heading Text="$HBT"
                    futur gradient size={ props.big ? "18px" : "16px"}
                    lg = {props.big ? "16px" : "14x"}
                    xm = {props.big ? "14px" : "12px"}
                    ms = {props.big ? "14px" : "12px"}
                />
            }
        </Flex>
        <Flex style={{alignItems:'center',justifyContent:'center'}}>
            { props.btn ?
            <Button nav navWidth="10rem" navSmall="6rem" navPs="0 0.25rem"
                Text={props.value ? props.value : 'STAKE NOW'} m="0.75rem 0 0 0" />
                : null
            }
        </Flex>
    </StyledBox>
  )
}

export default DetailBox