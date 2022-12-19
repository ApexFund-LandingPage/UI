import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    width: 100%;
    align-items: center;

    @media(max-width: 450px){
            
    }

`
export const ResponsiveDisplay = styled.div`
    display: flex;
    width: 1400px;
    align-items: center;
    justify-content: space-around;
    margin: 4rem 0 0 0;

    @media(max-width: 1400px){
        width : 95%;
    }

    @media(max-width: 1000px){
        flex-direction: column;
    }
`