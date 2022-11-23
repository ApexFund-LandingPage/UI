import styled from "styled-components";

export const StyledStakeAmount = styled.div`
    margin: 2.5rem 0 3rem 0;
`

export const Absolute = styled.div`
    position: absolute;
    right: 0;
    top: 0.35rem;
`

export const Input = styled.input`
    width: 100%;
    height: 3.5rem;
    border-radius: 0.5rem;
    background-color: #1E1E1E;
    color: #FFF;
    border: 1px solid rgba(94, 140, 201, 1);
    margin: 0.25rem 0;
`

export const StyledInput = styled.input`
        color: ${props=>props.color ? props.color : '#FFFFFF'};
        font-size: 20px;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: 0.075em;
        border: 2px solid #6166AE;
        border-radius: ${props=>props.br ? props.br : '0.5rem'}; 
        background-color: #303030;
        margin: 0.25rem 0;
        height: ${props=>props.height ? props.height: '3.5rem'};
        width: 100%;
        padding:2px;
        &:placeholder{
            color: #666666;
        }

        &:focus, &:focus{
            outline: none;
        }
    `

export const InputContainer = styled.div`
    width: 30rem;
    position: relative;

    @media(max-width: 548px){
        width: 85vw;
    }
`