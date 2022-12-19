import React from 'react'
import PageLayout from '../../components/PageLayout/PageLayout'
import PageWidth from '../../components/Width/PageWidth'
import bg from './components/bg.png'
import Head from './components/Head'
import Download from './components/Download/Download'

const index = () => {
  return (
    <PageLayout bg={bg} adjustBg>
      <PageWidth Left>
        <Head />
        <Download />
      </PageWidth>
    </PageLayout>
  )
}

export default index