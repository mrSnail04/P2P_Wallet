import React, { useEffect } from 'react'
import { inputTypeIcons } from '../../components/Input/Input'
import trustpilot from '../../assets/images/trustpilot.png'
import { FormBuyCrypto } from '../../components/FormBuyCrypto/FormBuyCrypto'
import { useParams } from 'react-router-dom'
import { WalletAddress } from '../../components/WalletAddress/WalletAddress'
import { FormCard } from '../../components/FormCard/FormCard'
import { useDispatch, useSelector } from 'react-redux'
import {
  typeBuySelector,
  typeSellSelector,
  pageSelector,
  updateTypeBuy,
  updateTypeSell
} from '../../store/countSlice'
import { ChooseCurrency } from '../../components/ChooseCurrency/ChooseCurrency'
import styles from './BuyCrypto.module.scss'

export const currencyType = {
  BTC: { name: 'BTC', fullName: 'Bitcoin', icon: inputTypeIcons.BTC },
  USDT: { name: 'USDT', fullName: 'Tether(TRC-20)', icon: inputTypeIcons.USDT },
  ETH: { name: 'ETH', fullName: 'Ethereum', icon: inputTypeIcons.ETH },
  USDC: { name: 'USDC', fullName: 'USD Coin', icon: inputTypeIcons.USDC },
  BNB: { name: 'BNB', fullName: 'Binance Coin(BEP-20)', icon: inputTypeIcons.BNB },
  BUSD: { name: 'BUSD', fullName: 'Binance USD', icon: inputTypeIcons.BUSD },
  USD: { name: 'USD', fullName: 'USD', icon: inputTypeIcons.USD }
}

export const listBuyCurrency = {
  BTC: { name: 'BTC', fullName: 'Bitcoin', icon: inputTypeIcons.BTC, focus: false },
  BNB: { name: 'BNB', fullName: 'Binance Coin(BEP-20)', icon: inputTypeIcons.BNB, focus: false },
  ETH: { name: 'ETH', fullName: 'Ethereum', icon: inputTypeIcons.ETH, focus: false },
  USDT: { name: 'USDT', fullName: 'Tether(TRC-20)', icon: inputTypeIcons.USDT, focus: false },
  USDC: { name: 'USDC', fullName: 'USD Coin', icon: inputTypeIcons.USDC, focus: false },
  BUSD: { name: 'BUSD', fullName: 'Binance USD', icon: inputTypeIcons.BUSD, focus: false }
}
export const listSellCurrency = {
  USD: { name: 'USD', fullName: 'USD', icon: inputTypeIcons.USD, focus: false },
  USDT: { name: 'USDT', fullName: 'Tether(TRC-20)', icon: inputTypeIcons.USDT, focus: false }
}
export const BuyCrypto = () => {
  const dispatch = useDispatch()
  const page = useSelector(pageSelector)
  const typeBuyCurrency = useSelector(typeBuySelector)
  const typeSellCurrency = useSelector(typeSellSelector)
  const { cryptoOption, currencySell, currencyBuy } = useParams()
  useEffect(() => {
    if (!currencySell) {
      dispatch(updateTypeSell('usd'))
    } else {
      dispatch(updateTypeSell(currencySell))
    }
    if (!currencyBuy) {
      dispatch(updateTypeBuy('btc'))
    } else {
      dispatch(updateTypeBuy(currencyBuy))
    }
  }, [currencyBuy, currencySell])
  let buyCurrency = null
  let sellCurrency = null
  if (cryptoOption === 'buy') {
    buyCurrency = listBuyCurrency
    sellCurrency = listSellCurrency
  }
  if (cryptoOption === 'sell') {
    buyCurrency = listSellCurrency
    sellCurrency = listBuyCurrency
  }

  let typeSell = currencyType[typeSellCurrency.toUpperCase()]
  if (!typeSell) {
    typeSell = currencyType.USD
  }
  let typeBuy = currencyType[typeBuyCurrency.toUpperCase()]
  if (!typeBuy) {
    typeBuy = currencyType.BTC
  }
  return (
    <div className={styles.root}>
      <div className={styles.buyCryptoWrap}>
        {
          {
            1: <FormBuyCrypto typeSell={typeSell} typeBuy={typeBuy}/>,
            2: <WalletAddress typeSell={typeSell} typeBuy={typeBuy}/>,
            3: <FormCard/>,
            4.1: <ChooseCurrency listCurrency={sellCurrency}/>,
            4.2: <ChooseCurrency listCurrency={buyCurrency}/>
          }[page]
        }
      <div/>
      </div>
        <div className={styles.trustpilot}>
        <p>
          Rated by 41,787 people on
        </p>
        <img src={trustpilot} alt={'trustpilot image'}/>
      </div>
    </div>
  )
}
