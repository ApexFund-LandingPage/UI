import down from './download.png'
import styled from 'styled-components'

export const StyledDownload = styled.div`
    background-image: url('${down}');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    border-radius: 2rem;
    min-height: 8rem;
    width: 55rem;
    padding: 3rem 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 10rem 0 0 0;

    @media only screen and (max-width: 768px) {
        height: auto;
        width: 100%;
        padding: 2rem 0.5rem;
        margin: 2rem 0;
      }
`
export const CustomButton = styled.div`
    background-color: #FFF;
    display: flex;
    align-items: center;
    padding: 1rem 3rem;
    border-radius: 0.75rem;
    margin: 0 1rem;
`
export const ButtonResponsive = styled.div`
    display: flex;
    align-items: center;
    margin: 1rem 0 0 0;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }
`
export const Margin = styled.div`

    margin:  0 0 0;

    @media only screen and (max-width: 768px) {
        margin: 2rem 0 0 0;
    }
`
export const Center = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`