import styled from "styled-components";

export const StyledCard = styled.div`
    background: linear-gradient(107.64deg, #58A0D7 9.69%, #5E8CC9 29.52%, #6166AE 66.23%, #6C53A3 90.7%);
    padding: 2px;
    border-radius: 0.5rem;
    width: 80%;

    @media(max-width: 1100px){
        width: 95%;   
    }

    @media(max-width: 450px){
        width: 98%;   
    }
`
export const InnerCard = styled.div`
    background-color: #141414;
    width: 100%; 
    border-radius: 0.5rem; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem 10%;

    @media(max-width: 768px){
        padding: 3rem 2rem;
    }

    @media(max-width: 600px){
        padding: 2rem 1rem;
    }
`
export const Desktop = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width: 768px){
        display: none;
    }
`
export const Mobile = styled.div`
    display: none;

    @media(max-width: 768px){
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`