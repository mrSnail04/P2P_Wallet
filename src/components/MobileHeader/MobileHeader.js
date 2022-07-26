import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import { Link } from 'react-router-dom'
import arrow from '../../assets/icons/Arrow.svg'
import { changeOpenHamburger, changePage, openHamburgerSelector } from '../../store/countSlice'
import { useDispatch, useSelector } from 'react-redux'
import styles from './MobileHeader.module.scss'

export const MobileHeader = () => {
  const dispatch = useDispatch()
  const [dropdown, setDropdown] = useState(false)
  const openHamburger = useSelector(openHamburgerSelector)
  const handleBuyCryptoClick = () => {
    dispatch(changePage('1'))
    dispatch(changeOpenHamburger(!openHamburger))
  }
  useEffect(() => {
    setDropdown(false)
  }, [window.location.pathname])
  const handleLinkClick = () => {
    dispatch(changeOpenHamburger(!openHamburger))
  }
  return (
    <div>
      <div className={styles.menuWrap}>
        <Link to='/p2p_wallet/crypto/buy/btc/usd' onClick={handleBuyCryptoClick} className={styles.menuItem}>
          <span> Buy crypto </span>
        </Link >
        <button
          onClick={() => setDropdown((prev) => !prev)}
          className={cn(styles.menuItem, { [styles.dropdown]: dropdown })}
        >
          <span> Business </span>
          <img src={arrow} alt={'arrow'}/>
        </button>
        <Link onClick={handleLinkClick} to='/p2p_wallet' className={cn(styles.menuItem, { [styles.dropdownHide]: !dropdown })}>
          <div>
            <span> Partner login </span>
          </div>
        </Link>
        <Link onClick={handleLinkClick} to='/p2p_wallet/about' className={styles.menuItem}>
          <span> About us </span>
        </Link >
        <Link onClick={handleLinkClick} to='/p2p_wallet/careers' className={styles.menuItem}>
          <span> Careers </span>
        </Link>
        <Link onClick={handleLinkClick} to='/p2p_wallet/help' className={styles.menuItem}>
          <span> Help Center </span>
        </Link>
      </div>
    </div>
  )
}
