import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Buy from './Page/buy'
import Claim from './Page/claim'
import Referal from './Page/referral'
import { Routes, Route } from 'react-router-dom'
import Lending from './Page/lending'
import Staking from './Page/staking'

const App = () => {

  return (
    <>
      <Navbar /> 
      <Routes>
        <Route path='/' element={<Buy />} />
        <Route path='/claim' element={<Claim />} />
        <Route path='/referal' element={<Referal />} />
        <Route path='/lending' element={ <Lending /> } />
        <Route path='/stake' element={ <Staking /> } />
      </Routes>
    </>
  )
}

export default App
