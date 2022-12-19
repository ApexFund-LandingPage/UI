import React from 'react'
import PageLayout from '../../components/PageLayout/PageLayout'
import PageWidth from '../../components/Width/PageWidth'
import bg from './components/chooseBg.jpg'
import Head from './components/Head'
import Content from './components/Content'

const Choose = () => {
  return (
    <PageLayout bg={bg}>
      <PageWidth padding="2rem 0">
       <Head />
       <Content />
      </PageWidth>
    </PageLayout>
  )
}

export default Choose