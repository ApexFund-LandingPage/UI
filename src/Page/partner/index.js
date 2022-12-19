import React from 'react'
import PageLayout from '../../components/PageLayout/PageLayout'
import PageWidth from '../../components/Width/PageWidth'
import Partner from './components/Partner'

const index = () => {
  return (
    <PageLayout>
      <PageWidth>
        <Partner />
      </PageWidth>
    </PageLayout>
  )
}

export default index