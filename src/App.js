import React, { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Buy from './Page/buy'
import Claim from './Page/claim'
import Referal from './Page/referral'
import { Routes, Route, useLocation } from 'react-router-dom'
import Lending from './Page/lending'
import Staking from './Page/staking'
import  { Toaster } from 'react-hot-toast';
const App = () => {

  const search = useLocation().search;
  const referrer = new URLSearchParams(search).get("referrer");


  useEffect(() => {
    if (referrer) {
      localStorage.setItem("referrer",referrer)
    } 
  },[referrer])
  return (
    <>
      <Navbar /> 
      <Routes>
        <Route path='/' element={<Buy />} />
        <Route path='/claim' element={<Claim />} />
        <Route path='/referral' element={<Referal />} />
        <Route path='/lending' element={ <Lending /> } />
        <Route path='/stake' element={ <Staking /> } />
      </Routes>

      <Toaster/>
    </>
  )
}

export default App
