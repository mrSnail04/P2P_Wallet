import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import styles from './Layout.module.scss'
import { useSelector } from 'react-redux'
import { openHamburgerSelector } from '../../store/countSlice'
import { MobileHeader } from '../MobileHeader/MobileHeader'

export const Layout = () => {
  const openHamburger = useSelector(openHamburgerSelector)
  return (
    <div className={styles.root}>
      <div>
        <Header/>
        {openHamburger
          ? <MobileHeader/>
          : <Outlet/>
        }
      </div>
      <Footer/>
    </div>
  )
}
