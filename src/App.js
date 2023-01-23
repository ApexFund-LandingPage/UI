import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import LandingPage from './LandingPage'
//import Referal from './Page/referral'
import { Routes, Route } from 'react-router-dom'
import PrivacyPolicy from './PrivacyPolicy'
//import Lending from './Page/lending'

const App = () => {

  return (
    <>
      <Navbar /> 
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/privacypolicy' element={<PrivacyPolicy />} />

        {/* <Route path='/fund' element={<div />} /> */}
        {/* <Route path='/whyUs' element={<Referal />} /> */}
        {/* <Route path='/media' element={ <Lending /> } /> */}
      </Routes>
    </>
  )
}

export default App
