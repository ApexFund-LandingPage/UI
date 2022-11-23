import React from 'react';
import styled from 'styled-components';

const StyledPageLayout = styled.section`
width: 100%;
min-height: 100vh;
display: flex;
align-items: center;
justify-content: ${ props => props.start ? 'flex-start': 'center'};
flex-direction: column;
padding: ${props=>props.padding ? props.padding : "8rem 0 2rem 0"};
background: ${props=>props.bg ? props.bg : '#000000'};
`;

const PageLayout = ({children,bg,start,padding}) => {


  return (
    <StyledPageLayout bg={bg} padding={padding} start={start}>
      {children}
    </StyledPageLayout>
  )
};

export default PageLayout;
