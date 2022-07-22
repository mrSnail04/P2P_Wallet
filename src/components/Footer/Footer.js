import React, { useState } from 'react'
import cn from 'classnames'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { CheckBox } from '../CheckBox/CheckBox'
import styles from './Footer.module.scss'

export const Footer = () => {
  const listCurrency = [
    { name: 'BTC', focus: false },
    { name: 'BNB', focus: false },
    { name: 'ETH', focus: false },
    { name: 'USDT', focus: false },
    { name: 'USDC', focus: false },
    { name: 'BUSD', focus: false }
  ]
  const navigate = useNavigate()
  const { cryptoOption, currencyBuy, currencySell } = useParams()

  if (cryptoOption === 'buy') {
    if (currencyBuy) {
      // eslint-disable-next-line no-lone-blocks,array-callback-return
      { listCurrency.map((item, index) => {
        if (item.name === currencyBuy.toUpperCase()) {
          listCurrency[index].focus = true
        }
      })
      }
    } else {
      listCurrency[0].focus = true
    }
  }
  if (cryptoOption === 'sell') {
    if (currencySell) {
      // eslint-disable-next-line no-lone-blocks,array-callback-return
      { listCurrency.map((item, index) => {
        if (item.name === currencySell.toUpperCase()) {
          listCurrency[index].focus = true
        }
      })
      }
    } else {
      listCurrency[0].focus = true
    }
  }
  const [forms, setForms] = useState({
    email: '',
    checkbox: false
  })
  const handleCheckboxClick = () => {
    setForms(prevState => ({
      ...prevState,
      checkbox: !forms.checkbox
    }))
  }
  const handleChangeValue = (event) => {
    setForms(prevState => ({
      ...prevState,
      email: event.target.value
    }))
  }
  const resetForms = () => {
    setForms({
      email: '',
      checkbox: false
    })
  }
  const handleForm = (event) => {
    event.preventDefault()
  }
  const handleFormSubmit = () => {
    console.log('#####:form ', forms)
    resetForms()
  }
  const handleCryptoClick = (event) => {
    event.preventDefault()
    if (cryptoOption === 'buy') {
      navigate(`crypto/${cryptoOption}/${event.currentTarget.name.toLowerCase()}/${currencySell}`)
    }
    if (cryptoOption === 'sell') {
      navigate(`crypto/${cryptoOption}/${currencyBuy}/${event.currentTarget.name.toLowerCase()}`)
    }
  }
  return (
    <div className={styles.root}>
      <div className={styles.footerWrap}>
        <div className={styles.footerBlocks}>
          {window.location.href.indexOf('crypto') !== -1
            ? <div className={styles.quickBuyWrap}>
                <div className={styles.blockQuickBuy}>
                  <p>
                      Quick {cryptoOption}
                  </p>
                  <div className={styles.buttonBlock}>
                  { listCurrency.map(item => {
                    return (
                      <button
                        onClick={handleCryptoClick}
                        name={item.name}
                        key={item.name}
                        className={cn(
                          styles.button,
                          { [styles.focus]: item.focus }
                        )}
                      >
                        {cryptoOption.charAt(0).toUpperCase() + cryptoOption.slice(1)} {item.name}
                      </button>
                    )
                  })}
                  </div>
                </div>
              </div>
            : null
          }
            <div className={styles.mainFooter}>
              <div className={styles.footerBlockOne}>
                <div className={styles.footerNav}>
                  <div className={styles.blockItem}>
                    <Link to='/crypto/buy/btc/usd' className={styles.footerItem}>
                      <span> Buy crypto </span>
                    </Link >
                    <Link to='/careers' className={styles.footerItem}>
                      <span> Careers </span>
                    </Link >
                  </div>
                  <div className={styles.blockItem}>
                    <Link to='/p2p_wallet' className={styles.footerItem}>
                      <span> Business </span>
                    </Link >
                    <Link to='/p2p_wallet' className={styles.footerItem}>
                      <span> Partner login </span>
                    </Link >
                  </div>
                  <div className={styles.blockItem}>
                    <Link to='/about' className={styles.footerItem}>
                      <span> About us </span>
                    </Link >
                    <Link to='/help' className={styles.footerItem}>
                      <span> Help Center </span>
                    </Link >
                  </div>
                </div>
                <div className={styles.copyrightBlock}>
                  <p>
                    Copyright 2022 Coin Swap Limited. All rights reserved.
                  </p>
                  <p>
                    CoinSwap USA LLC is a registered money service business (NMLS ID: 8671335).
                  </p>
                  <p>
                    For Law Enforcement requests please direct your official document to our compliance team.
                  </p>
                </div>
              </div>
              <div className={styles.footerBlockTwo}>
                <p className={styles.subscribeText}>
                  Subscribe to our newsletter
                </p>
                <form onSubmit={handleForm}>
                  <label htmlFor={'email'} className={styles.inputLabel}>
                    <p>Email <span>*</span></p>
                    <input className={styles.subscribeInput}
                     type={'email'}
                     name={'email'}
                     value={forms.email}
                     onChange={handleChangeValue}
                    />
                  </label>
                  <div className={styles.footerButton}>
                    <button onClick={handleFormSubmit} className={styles.subscribeButton}>
                      <p> Subscribe </p>
                    </button>
                    <CheckBox checked={forms.checkbox} onClick={handleCheckboxClick}/>
                  </div>
                </form>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
