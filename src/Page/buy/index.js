import React from 'react'
import PageLayout from '../../components/PageLayout/PageLayout'
import PageWidth from '../../components/Width/PageWidth'
import Heading from '../../components/Heading/Heading'
import { ResponsiveDisplay } from './components/Flex'
import Tokken from './components/token'
import Card from './components/card'
import Flex from '../../components/Styling/Flex'

const Buy = () => {
  return (
    <PageLayout>
        <PageWidth width="1600px">
            <div>
                <Flex lcolumn>
                    <Heading Text="Public sale starting at" gradient />
                    <Heading faktumFont Text="DD/MM/YYYY  AT  0000HRS (UTC +8)" m="0 0 0 1rem" 
                        size="38px" ls="0.1rem"
                    />
                </Flex>
                <Flex lcolumn m="1rem 0 0 0">
                    <Heading Text="Public sale end" gradient />
                    <Heading faktumFont Text="DD/MM/YYYY  AT  0000HRS (UTC +8)" m="0 0 0 1rem" 
                        size="38px" ls="0.1rem"
                    />
                </Flex>
            </div>
            <ResponsiveDisplay>
                <Tokken />
                <Card />
            </ResponsiveDisplay>
        </PageWidth>
    </PageLayout>
  )
}

export default Buy