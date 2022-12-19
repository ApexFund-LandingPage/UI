import React from 'react'
import PageLayout from '../../components/PageLayout/PageLayout'
import PageWidth from '../../components/Width/PageWidth'
import bg from './components/bg.png'
import content from './components/content.png'
import Head from './components/Head'
import { Image } from './components/Styled'

const index = () => {
  return (
    <PageLayout start bg={bg}>
      <PageWidth>
        <Head />
      </PageWidth>
      <Image>
        <img src={content} alt="" style={{height:'100%',width:'100%'}} />
      </Image>
    </PageLayout>
  )
}

export default index