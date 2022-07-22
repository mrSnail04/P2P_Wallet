import React from 'react'
import { Link } from 'react-router-dom'
import cn from 'classnames'
import BTCIcon from '../../assets/icons/BTCIcon.svg'
import USDTIcon from '../../assets/icons/USDTIcon.svg'
import ETHIcon from '../../assets/icons/ETHIcon.svg'
import USDCIcon from '../../assets/icons/USDCoinIcon.svg'
import BNBIcon from '../../assets/icons/BinanceCoinIcon.svg'
import BUSDIcon from '../../assets/icons/BinanceUSDIcon.svg'
import styles from './Button.module.scss'

export const buttonType = {
  BTC: 'BTC',
  USDT: 'USDT',
  ETH: 'ETH',
  USDC: 'USDC',
  BNB: 'BNB',
  BUSD: 'BUSD'
}
const buttonTypeIcons = {
  BTC: BTCIcon,
  USDT: USDTIcon,
  ETH: ETHIcon,
  USDC: USDCIcon,
  BNB: BNBIcon,
  BUSD: BUSDIcon
}
export const buttonSize = {
  Large: 'large',
  Small: 'small',
  BlockSize: 'blockSize'
}
export const Button = ({
  title,
  type,
  url,
  typeCurrency = buttonType,
  color,
  size = buttonSize,
  onClick,
  onSubmit
}) => {
  return (
    <>
      {url
        ? <Link to={url}
          className={styles.root}>
          <button
            type={type}
            className={cn(
              styles.button,
              styles[`color_${color}`],
              styles[`size_${size}`]
            )}
            onClick={onClick}
            onSubmit={onSubmit}
          >
            {typeCurrency.length > 0
              ? <img src={buttonTypeIcons[`${typeCurrency}`]} alt='icon crypto'/>
              : null
            }
            <span> {title} </span>
          </button>
        </Link>
        : <button
          type={type}
          className={cn(
            styles.button,
            styles[`color_${color}`],
            styles[`size_${size}`]
          )}
          onClick={onClick}
          onSubmit={onSubmit}
          >
            {typeCurrency.length > 0
              ? <img src={buttonTypeIcons[`${typeCurrency}`]} alt='icon crypto'/>
              : null
            }
            <span> {title} </span>
          </button>
      }
    </>

  )
}
