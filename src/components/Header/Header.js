import React, { useState } from 'react'
import cn from 'classnames'
import Logo from '../../assets/images/Logo_Header.png'
import arrow from '../../assets/icons/Arrow.svg'
import Heading from '../Heading/Heading'
import { Link } from 'react-router-dom'
import { Dropdown } from '../Dropemenu/DropMenu'
import styles from './Header.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { changeOpenHamburger, changePage, openHamburgerSelector } from '../../store/countSlice'

export const Header = () => {
  const dispatch = useDispatch()
  const openHamburger = useSelector(openHamburgerSelector)
  const [dropdown, setDropdown] = useState(false)
  const handleBuyCryptoClick = () => {
    dispatch(changePage('1'))
  }
  const handleHamburgerClick = () => {
    dispatch(changeOpenHamburger(!openHamburger))
  }
  const handleLinkClick = () => {
    if (openHamburger) {
      dispatch(changeOpenHamburger(!openHamburger))
    }
  }
  return (
    <nav className={styles.root}>
      <div className={styles.navWrap}>
        <Link to='/p2p_wallet' className={styles.logo} onClick={handleLinkClick}>
          <img src={Logo} alt={'Logo'}/>
          <Heading level={3}>CoinSwap</Heading>
        </Link>
        <div className={styles.hamburgerWrap}>
          <button
            onClick={handleHamburgerClick}
            className={cn(styles.hamburgerButton, { [styles.close]: openHamburger })}
          />
        </div>
        <div className={styles.menuWrap}>
          <div className={styles.groupOneWrap}>
            <Link to='/crypto/buy/btc/usd' onClick={handleBuyCryptoClick} className={styles.menuItem}>
              <span> Buy crypto </span>
            </Link >
            <button
              onClick={() => setDropdown((prev) => !prev)}
              className={styles.menuItem}
            >
              <span> Business </span>
              <img src={arrow} alt={'arrow'}/>
              <Dropdown dropdown={dropdown}/>
            </button>
          </div>
          <div className={styles.groupTwoWrap}>
            <Link to='/about' className={styles.menuItem}>
              <span> About us </span>
            </Link >
            <Link to='/careers' className={styles.menuItem}>
              <span> Careers </span>
            </Link>
            <Link to='/help' className={styles.menuItem}>
              <span> Help Center </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
