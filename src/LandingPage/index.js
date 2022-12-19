import React from 'react'
import ApexFund from '../Page/apexFund'
import Partner from '../Page/partner/components/Partner'
import About from '../Page/about'
import Choose from '../Page/choose'
import ScreenShot from '../Page/screenshot'
import Testimonilas from '../Page/testimonials'
import Learn from '../Page/learn'
import Footer from '../components/Footer'

const index = () => {
  return (
    <>
      <ApexFund />
      <Partner />
      <About />
      <Choose />
      <ScreenShot />
      {/* <Testimonilas /> */}
      <Learn />
      <Footer />
    </>
  )
}

export default index