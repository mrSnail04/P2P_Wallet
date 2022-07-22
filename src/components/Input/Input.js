import React from 'react'
import BTCIcon from '../../assets/icons/BTCIcon.svg'
import USDTIcon from '../../assets/icons/USDTIcon.svg'
import ETHIcon from '../../assets/icons/ETHIcon.svg'
import USDCIcon from '../../assets/icons/USDCoinIcon.svg'
import BNBIcon from '../../assets/icons/BinanceCoinIcon.svg'
import BUSDIcon from '../../assets/icons/BinanceUSDIcon.svg'
import USDIcon from '../../assets/icons/USDIcon.svg'
import styles from './Input.module.scss'
import arrow from '../../assets/icons/Arrow.svg'

export const inputTypeIcons = {
  BTC: BTCIcon,
  USDT: USDTIcon,
  ETH: ETHIcon,
  USDC: USDCIcon,
  BNB: BNBIcon,
  BUSD: BUSDIcon,
  USD: USDIcon
}
export const Input = ({
  icon = inputTypeIcons,
  placeholderColor,
  cryptName,
  title,
  type,
  required,
  name,
  value,
  onChange,
  pattern,
  placeholder,
  withButton,
  withIcon,
  onFocus,
  onBlur,
  onClick
}) => {
  return (
    <>
      <label className={styles.label} htmlFor={name}>
        {title}
      </label>
      <div className={styles.inputWrap}>
        {withButton
          ? <button className={styles.buttonWrap} type="button" onClick={onClick}>
              <img className={styles.iconButton} src={icon} alt={'crypt icon'}/>
              <p className={styles.currencyName}>
                {cryptName}
              </p>
              <img className={styles.arrowIconWrap} src={arrow} alt={'arrow'}/>
            </button>
          : null
        }
        {withIcon ? <img className={styles.icon} src={icon} alt={'crypt icon'}/> : null}
        <input
          className={styles[`placeholderColor_${placeholderColor}`]}
          placeholder={placeholder}
          pattern={pattern}
          type={type}
          required={required}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </div>
    </>
  )
}
