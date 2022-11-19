import styled from "styled-components";

export const StyledCard = styled.div`
    background: linear-gradient(107.64deg, #58A0D7 9.69%, #5E8CC9 29.52%, #6166AE 66.23%, #6C53A3 90.7%);
    padding: 2px;
    border-radius: 0.5rem;

    @media(max-width: 1200px){
        margin : 2rem 0 0 0;
    }

    @media(max-width: 768px){
        width : 98%;
    }

`
export const InnerCard = styled.div`
    background-color: #141414;
    width: 40rem; 
    border-radius: 0.5rem; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.5rem 0 2.5rem 0;


    @media(max-width: 768px){
        width : 100%;
    }
`