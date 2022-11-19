import React from 'react';
import styled from 'styled-components';

const PageLayout = ({children,bg,start,padding}) => {

  const StyledPageLayout = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: ${ start ? 'flex-start': 'center'};
    flex-direction: column;
    padding: ${padding ? padding : "8rem 0 2rem 0"};
    background: ${bg ? bg : '#000000'};
`;

  return (
    <StyledPageLayout>
      {children}
    </StyledPageLayout>
  )
};

export default PageLayout;
