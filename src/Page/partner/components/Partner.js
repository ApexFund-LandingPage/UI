import React from 'react'
import Flex from '../../../components/Styling/Flex'
import PageLayout from '../../../components/PageLayout/PageLayout'
import PageWidth from '../../../components/Width/PageWidth'
import p1  from './p1.png'
import p2  from './p2.png'
import p3  from './p3.png'
import p4  from './p4.png'
import p5  from './p5.png'
import p6  from './p6.png'
import styled from 'styled-components'

const Partner = () => {

  const ResponsiveDisplay = styled.div`
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    place-items: center;
    margin: 3rem 0 6rem 0;
    width: 100%;
  `

  return (
    <PageLayout height="100%">
      <PageWidth>
        <ResponsiveDisplay>
          <img src={p1} alt="" style={{width:'9rem',height:'4rem'}} />
          <img src={p2} alt="" style={{width:'9rem',height:'4rem'}} />
          <img src={p3} alt="" style={{width:'9rem',height:'4rem'}} />
          <img src={p4} alt="" style={{width:'9rem',height:'4rem'}} />
          <img src={p5} alt="" style={{width:'9rem',height:'4rem'}} />
          <img src={p6} alt="" style={{width:'9rem',height:'4rem'}} />
        </ResponsiveDisplay>
      </PageWidth>
    </PageLayout>
  )
}

export default Partner