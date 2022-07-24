import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import './App.module.scss'
import { About } from './pages/About/About'
import { Layout } from './components/Layout/Layout'
import { Main } from './pages/Main/Main'
import { Careers } from './pages/Careers/Careers'
import { Help } from './pages/Help/Help'
import { BuyCrypto } from './pages/BuyCrypto/BuyCrypto'

function App () {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="p2p_wallet" element={<Main/>}/>
        <Route path="about" element={<About/>} />
        <Route path="careers" element={<Careers/>} />
        <Route path="help" element={<Help/>} />
        <Route path="crypto" element={<BuyCrypto/>}>
           <Route path=":cryptoOption/:currencyBuy/:currencySell" element= {<BuyCrypto/>} />
        </Route>
        <Route path="*" element={<NotFound/>} />
      </Route>
    </Routes>
  )
}
export default App
const NotFound = () => {
  return (
    <div> 404 </div>
  )
}
