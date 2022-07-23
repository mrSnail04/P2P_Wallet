import React, { useState } from 'react'
import cn from 'classnames'
import styles from './ChooseCurrency.module.scss'
import close from '../../assets/icons/Close.svg'
import search from '../../assets/icons/Search.svg'
import arrow from '../../assets/icons/Arrow.svg'
import { changePage, pageSelector, updateTypeBuy, updateTypeSell } from '../../store/countSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

export const ChooseCurrency = (listCurrency) => {
  const { cryptoOption, currencyBuy, currencySell } = useParams()
  const [searchValue, setSearchValue] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const page = useSelector(pageSelector)
  const onCloseClick = () => {
    dispatch(changePage('1'))
  }
  const listCurrencyArr = []
  Object.keys(listCurrency.listCurrency).forEach(
    key => listCurrencyArr.push({ name: key, value: listCurrency.listCurrency[key] }))
  // eslint-disable-next-line array-callback-return
  listCurrencyArr.map((item, index) => {
    if (page === '4.2') {
      if (item.name.toLowerCase() === currencyBuy) {
        item.value.focus = true
        return (
          listCurrencyArr.splice(0, 0, listCurrencyArr.splice(index, 1)[0])
        )
      } else {
        item.value.focus = false
      }
    }
    if (page === '4.1') {
      if (item.name.toLowerCase() === currencySell) {
        item.value.focus = true
        return (
          listCurrencyArr.splice(0, 0, listCurrencyArr.splice(index, 1)[0])
        )
      } else {
        item.value.focus = false
      }
    }
  })
  let filterCrypto = []
  if (searchValue.length > 0) {
    filterCrypto = listCurrencyArr.filter(item => {
      return (
        item.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    })
  } else {
    filterCrypto = listCurrencyArr
  }
  const handleChangeValue = (event) => {
    setSearchValue(event.target.value)
  }
  const handleButtonClick = (event) => {
    if (page === '4.2') {
      dispatch(updateTypeSell(currencySell))
      dispatch(updateTypeBuy(event.currentTarget.name.toLowerCase()))
      navigate(`${cryptoOption}/${event.currentTarget.name.toLowerCase()}/${currencySell}`)
    } else {
      dispatch(updateTypeBuy(currencyBuy))
      dispatch(updateTypeSell(event.currentTarget.name.toLowerCase()))
      navigate(`${cryptoOption}/${currencyBuy}/${event.currentTarget.name.toLowerCase()}`)
    }
    dispatch(changePage('1'))
  }
  return (
    <div className={styles.root}>
      <div className={styles.titleWrapBlock}>
        <p className={styles.titleWrap}>
          Choose currency
          <button onClick={onCloseClick}>
            <img src={close} alt={'Button close'} />
          </button>
        </p>
      </div>
      <div className={styles.searchBlock}>
        <input
          className={styles.inputSearch}
          placeholder='Search'
          value={searchValue}
          onChange={handleChangeValue}
        />
        <button className={styles.iconSearch}>
          <img src={search} alt={'Search icon'}/>
        </button>
      </div>
      <div className={styles.chooseCryptoBlock}>
        <p className={styles.titleChooseCrypto}>Popular</p>
        <div className={styles.listCurrency}>
          { filterCrypto.map(item => {
            return (
              <button
                name={item.value.name}
                key={item.value.name}
                className={cn(styles.buttonCurrency, { [styles.focus]: item.value.focus })}
                onClick={handleButtonClick}
              >
                <img className={styles.cryptoIcon} src={item.value.icon} alt='Currency Icon'/>
                <p> {item.value.name} <span>- {item.value.fullName}</span> </p>
                <img className={styles.arrowIcon} src={arrow} alt='Arrow'/>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
