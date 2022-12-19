import React from 'react'
import PageLayout from '../../components/PageLayout/PageLayout'
import PageWidth from '../../components/Width/PageWidth'
import { ResponsiveDisplay } from './components/Flex'
import TextContainer from './components/textContainer'
import ImageContainer from './components/imageContainer'
import bg from './components/bg.jpg'

const Buy = () => {
  return (
    <PageLayout bg={bg}>
      <PageWidth width="1600px">
        <ResponsiveDisplay>
          <TextContainer />
          <ImageContainer />
        </ResponsiveDisplay>
      </PageWidth>
    </PageLayout>
  )
}

export default Buy