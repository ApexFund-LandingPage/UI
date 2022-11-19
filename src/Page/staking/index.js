import React from 'react'
import PageLayout from '../../components/PageLayout/PageLayout'
import PageWidth from '../../components/Width/PageWidth'
import Card from './Card'

const index = () => {
  return (
    <PageLayout>
        <PageWidth>
          <Card />
        </PageWidth>
    </PageLayout>
  )
}

export default index