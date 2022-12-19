import React from 'react'
import PageLayout from '../../components/PageLayout/PageLayout'
import PageWidth from '../../components/Width/PageWidth'
import Head from './components/Head'
import Content from './components/Content'
import ButtonContainer from './components/ButtonContainer'

const About = () => {
  return (
    <PageLayout>
      <PageWidth>
        <Head />
        <Content />
        <ButtonContainer />
      </PageWidth>
    </PageLayout>
  )
}

export default About