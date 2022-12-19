import React from 'react'
import PageLayout from '../../components/PageLayout/PageLayout'
import PageWidth from '../../components/Width/PageWidth'
import bg from './components/ss.jpg'
import Head from './components/Head'

const index = () => {
  return (
    <PageLayout Left>
      <PageWidth>
        <Head />
      </PageWidth>
      <img src={bg} alt="" style={{height:'100%',width:'100%'}} />
    </PageLayout>
  )
}

export default index