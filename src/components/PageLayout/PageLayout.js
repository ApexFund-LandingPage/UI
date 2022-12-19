import React from 'react';
import styled from 'styled-components';

const PageLayout = ({children,bg,start,padding,height, adjustBg}) => {

  const StyledPageLayout = styled.section`
    //min-width: 100vh;
    min-height: ${ height ? height : '100vh' };
    display: flex;
    align-items: center;
    justify-content: ${ start ? 'flex-start': 'center'};
    flex-direction: column;
    padding-top: ${padding ? padding : "calc(1rem + 1rem)"};
    background-image: url(${bg ? bg : ''});
    background-size: ${ adjustBg ? '100% auto' : '100% 100%'};
    background-repeat: no-repeat;
    position: relative;
    background-position: center center;
    overflow-x: hidden;

    @media(max-width: 1200px){
      background-size: ${ adjustBg ? '100% auto' : 'auto 100%' } ;
      background-position: ${adjustBg ? 'center center' : 'center top'} ;
    }

    @media(max-width: 768px){
      min-height: 100%;
    }
`;

  return (
    <StyledPageLayout>
      {children}
    </StyledPageLayout>
  )
};

export default PageLayout;
