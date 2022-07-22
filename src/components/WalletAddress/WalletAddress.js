import React from 'react'
import styles from './WalletAddress.module.scss'
import { Input } from '../Input/Input'
import arrow from '../../assets/icons/Arrow.svg'
import { Button, buttonSize } from '../Button/Button'
import { Summary } from '../Summary/Summary'
import { changePage, updateWalletAddress, walletAddressSelector } from '../../store/countSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export const WalletAddress = ({
  typeSell,
  typeBuy
}
) => {
  const { cryptoOption } = useParams()
  const dispatch = useDispatch()
  const walletAddress = useSelector(walletAddressSelector)
  const regWalletAddress = '([0-9A-Za-z]{0,34})'
  const handleForm = (event) => {
    event.preventDefault()
  }
  const handleAddressChangeValue = (event) => {
    const inputWalletAddresValue = event.target.validity.valid || event.target.value === ''
      ? event.target.value
      : walletAddress
    dispatch(updateWalletAddress(inputWalletAddresValue))
  }
  const handleFormSubmit = (event) => {
    event.preventDefault()
    if (walletAddress.length > 0) {
      console.log('#####:Wallet address: ', walletAddress)
      dispatch(changePage('3'))
    } else {
      console.log('#####:Wallet address: empty')
    }
  }
  const onBackClick = (event) => {
    event.preventDefault()
    dispatch(changePage('1'))
  }
  return (
    <div className={styles.walletWrap}>
      <form onSubmit={handleForm}>
        <div className={styles.titleWrapBlock}>
          <div className={styles.titleWrap}>
            <button type={'button'} onClick={onBackClick}>
                <img src={arrow} alt={'arrow'} />
            </button>
            <p className={styles.title}>Enter your
              {cryptoOption === 'buy'
                ? <span> {typeBuy.name} </span>
                : <span> {typeSell.name} </span>
              }
              address
            </p>
          </div>
          <div className={styles.titleDescription}>
            <p className={styles.title}>
              To receive crypto you need a
              {cryptoOption === 'buy'
                ? <span> {typeBuy.name} </span>
                : <span> {typeSell.name} </span>
              }
              address.
            </p>
          </div>
        </div>
        {cryptoOption === 'buy'
          ? <Input
            pattern={regWalletAddress}
            withButton={false}
            withIcon={true}
            name={'wallet'}
            cryptName = {`${typeBuy.name}`}
            icon={typeBuy.icon}
            title={ [`${typeBuy.name} wallet address`] }
            required={true}
            type={'text'}
            placeholderColor={'Black'}
            placeholder={`Enter your ${typeBuy.name} wallet address`}
            value={walletAddress}
            onChange={handleAddressChangeValue}
          />
          : <Input
            pattern={regWalletAddress}
            withButton={false}
            withIcon={true}
            name={'wallet'}
            cryptName = {`${typeSell.name}`}
            icon={typeSell.icon}
            title={ [`${typeSell.name} wallet address`] }
            required={true}
            type={'text'}
            placeholderColor={'Black'}
            placeholder={`Enter your ${typeSell.name} wallet address`}
            value={walletAddress}
            onChange={handleAddressChangeValue}
          />
        }
        <div className={styles.warningBlock}>
          <p className={styles.warningTitle}>
            Be aware of scammers and hackers!
          </p>
          <ul className={styles.warningDescription}>
            <li>
              You are the only one to have access to your wallet.
              If someone else has been setting up your wallet or gave you the address,
              most likely, they are trying to acam you.
            </li>
          </ul>
        </div>
        <Summary buyName={typeBuy.name} sellName={typeSell.name}/>
        <div className={styles.buttonWrap}>
          <Button
            title={'Continue'}
            size={buttonSize.BlockSize}
            onClick={handleFormSubmit}
          />
        </div>
      </form>
    </div>
  )
}
