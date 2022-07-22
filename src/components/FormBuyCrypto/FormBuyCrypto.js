import React, { useCallback, useLayoutEffect, useState } from 'react'
import cn from 'classnames'
import { usePrevious } from '../../utils/usePrevious'
import { Input } from '../Input/Input'
import { Button, buttonSize } from '../Button/Button'
import { Summary } from '../Summary/Summary'
import { useDispatch, useSelector } from 'react-redux'
import {
  changePage,
  countBuySelector,
  countSellSelector,
  rateSelector,
  updateBuy,
  updateSell, updateTypeBuy, updateTypeSell
} from '../../store/countSlice'
import styles from './FormBuyCrypto.module.scss'
import { useNavigate, useParams } from 'react-router-dom'

export const FormBuyCrypto = ({
  typeSell,
  typeBuy
}) => {
  const [isActiveBuy, setIsActiveBuy] = useState(false)
  const regSell = '([1-9][0-9]{0,5})|([1-9][0-9]{0,5}[.][0-9]{0,2})'
  const regBuy = '([0])|([0][.][0-9]{0,5})|([1-4][0-9]{0,1})|([1-4][0-8]{0,3}[.][0-9]{0,5})'

  const countSell = useSelector(countSellSelector)
  const countBuy = useSelector(countBuySelector)
  const rate = useSelector(rateSelector)
  const prevRate = usePrevious(rate)
  const prevCountBuy = usePrevious(countBuy)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { cryptoOption, currencySell, currencyBuy } = useParams()

  const handleSellChangeValue = useCallback((event) => {
    const inputSellCountValue = event.target.validity.valid || event.target.value === ''
      ? event.target.value
      : countSell
    dispatch(updateSell(inputSellCountValue))
  }, [countSell])
  const handleBuyChangeValue = useCallback((event) => {
    const inputBuyCountValue = event.target.validity.valid || event.target.value === ''
      ? event.target.value
      : countBuy
    dispatch(updateBuy(inputBuyCountValue))
  }, [countBuy])
  const handleFormSubmit = (event) => {
    event.preventDefault()
    if (countSell > 0) {
      dispatch(changePage('2'))
    }
  }
  const handleFocusInput = () => {
    setIsActiveBuy(!isActiveBuy)
  }
  const handleUnFocusInput = () => {
    setIsActiveBuy(!isActiveBuy)
  }
  const handleForm = (event) => {
    event.preventDefault()
  }
  const onButtonSellChangeCurrencyClick = () => {
    dispatch(changePage('4.1'))
  }
  const onButtonBuyChangeCurrencyClick = () => {
    dispatch(changePage('4.2'))
  }
  useLayoutEffect(() => {
    if (isActiveBuy && rate !== prevRate && countBuy !== prevCountBuy) {
      dispatch(updateBuy(prevCountBuy))
    }
  }, [rate, prevRate, countBuy, prevCountBuy, isActiveBuy])
  const handleBuyButton = () => {
    dispatch(updateTypeSell(currencyBuy))
    dispatch(updateTypeBuy(typeSell.name.toLowerCase()))
    navigate(`buy/${typeSell.name.toLowerCase()}/${currencyBuy}`)
  }
  const handleSellButton = () => {
    dispatch(updateTypeBuy(currencySell))
    dispatch(updateTypeSell(typeBuy.name.toLowerCase()))
    navigate(`sell/${currencySell}/${typeBuy.name.toLowerCase()}`)
  }
  return (
    <div className={styles.formBlockWrap}>
      <form onSubmit={handleForm}>
        <div className={styles.titleBlock}>
          <div className={styles.titleBuy}>
            <button
              disabled={cryptoOption === 'buy'}
              onClick={handleBuyButton}
              className={styles.titleButton}>
              <p className={cn(styles.titleWrap, { [styles.disable]: cryptoOption === 'sell' })}>
                Buy
                {cryptoOption === 'buy'
                  ? <span> {typeBuy.name} </span>
                  : <span> {typeSell.name} </span>
                }
              </p>
            </button>
          </div>
          <div>
            <button
              disabled={cryptoOption === 'sell'}
              name={typeSell.name}
              onClick={handleSellButton}
              className={styles.titleButton}
            >
              <p className={cn(styles.titleWrap, { [styles.disable]: cryptoOption === 'buy' })}>
                Sell
                {cryptoOption === 'buy'
                  ? <span> {typeBuy.name} </span>
                  : <span> {typeSell.name} </span>
                }
              </p>
            </button>
          </div>
        </div>
        <Input
          withButton={true}
          pattern={regSell}
          name={'sell'}
          cryptName = {typeSell.name}
          icon={typeSell.icon}
          title={ ['I want to spend'] }
          required={true}
          type={'tel'}
          value={countSell}
          onChange={handleSellChangeValue}
          onClick={onButtonSellChangeCurrencyClick}
        />
        <Input
          withButton={true}
          pattern={regBuy}
          name={'buy'}
          cryptName = {typeBuy.name}
          icon={typeBuy.icon}
          title={ ['I want to buy'] }
          required={true}
          type={'tel'}
          value={countBuy}
          onChange={handleBuyChangeValue}
          onFocus={handleFocusInput}
          onBlur={handleUnFocusInput}
          onClick={onButtonBuyChangeCurrencyClick}
        />
        <div className={styles.summaryBlock}>
          {countSell
            ? <Summary buyName={typeBuy.name} sellName={typeSell.name} />
            : null
          }
        </div>
        <div className={styles.buttonWrap}>
          <Button
            type={'submit'}
            title={'Continue'}
            size={buttonSize.BlockSize}
            onClick={handleFormSubmit}
          />
        </div>
      </form>
      <div className={styles.footNote}>
        <p>
          *By pressing continue you agree with our policy and cookies.
        </p>
      </div>
    </div>
  )
}
