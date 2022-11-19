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
export const InputContainer = styled.div`
    width: 30rem;
    position: relative;

    @media(max-width: 548px){
        width: 85vw;
    }
`