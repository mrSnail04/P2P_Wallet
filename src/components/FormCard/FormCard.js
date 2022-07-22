import React, { useState } from 'react'
import arrow from '../../assets/icons/Arrow.svg'
import { Input } from '../Input/Input'
import { Button, buttonSize } from '../Button/Button'
import { useNavigate } from 'react-router-dom'
import {
  cardHoldersNameSelector,
  cardNumberSelector,
  changePage,
  CVVSelector,
  expirationDateSelector,
  updateCardNumber,
  updateCardHoldersName,
  updateExpirationDate,
  updateCVV
} from '../../store/countSlice'
import { useDispatch, useSelector } from 'react-redux'
import styles from './FormCard.module.scss'
import { ClearState } from '../../utils/ClearState'

export const FormCard = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const cardNumber = useSelector(cardNumberSelector)
  const cardHoldersName = useSelector(cardHoldersNameSelector)
  const expirationDate = useSelector(expirationDateSelector)
  const CVV = useSelector(CVVSelector)
  const handleForm = (event) => {
    event.preventDefault()
  }
  const [clear, setClear] = useState(false)
  React.useEffect(() => {
    if (clear) {
      ClearState()
      setClear(false)
    }
  }, [clear])
  const regCVV = '([0-9]{0,3})'
  const regDate = '([0-3])||([0-3][0-9])||([0-3][0-9][/])||([0-3][0-9][/][12])||([0-3][0-9][/][12][0-7])'
  const regName = '([A-Z])||([A-Z][a-z]+)||([A-Z][a-z]+\\s)||([A-Z][a-z]+\\s[A-Z])||([A-Z][a-z]+\\s[A-Z][a-z]+)'
  const regCardNumber = '([0-9]{0,12})'
  const handleChangeValue = (event) => {
    switch (event.target.name) {
      case 'cardNumber': {
        const inputCardNumber = event.target.validity.valid || event.target.value === ''
          ? event.target.value
          : cardNumber
        dispatch(updateCardNumber(inputCardNumber))
        break
      }
      case 'cardHoldersName': {
        const inputCardHoldersName = event.target.validity.valid || event.target.value === ''
          ? event.target.value
          : cardHoldersName
        dispatch(updateCardHoldersName(inputCardHoldersName))
        break
      }
      case 'expirationDate': {
        const inputExpirationDate = event.target.validity.valid || event.target.value === ''
          ? event.target.value
          : expirationDate
        dispatch(updateExpirationDate(inputExpirationDate))
        break
      }
      case 'CVV': {
        const inputCVV = event.target.validity.valid || event.target.value === ''
          ? event.target.value
          : CVV
        dispatch(updateCVV(inputCVV))
        break
      }
      default:
    }
  }
  const handleFormSubmit = (event) => {
    event.preventDefault()
    if (cardNumber.length > 0 && cardHoldersName.length > 0 && expirationDate.length > 0 && CVV.length > 0) {
      navigate('/', { replace: true })
      setClear(true)
    }
  }
  const onBackClick = (event) => {
    event.preventDefault()
    dispatch(changePage('2'))
  }
  return (
    <div>
      <form onSubmit={handleForm}>
        <div className={styles.titleWrapBlock}>
          <p className={styles.titleWrap}>
            <button type={'button'} onClick={onBackClick}>
              <img src={arrow} alt={'arrow'} />
            </button>
            Enter your card address
          </p>
        </div>
        <Input
          pattern={regCardNumber}
          placeholderColor={'Gray'}
          name={'cardNumber'}
          title={ ['Card number'] }
          required={true}
          type={'text'}
          placeholder={'1212 1212 1212 1212'}
          value={cardNumber}
          onChange={handleChangeValue}
        />
        <Input
          pattern={regName}
          placeholderColor={'Gray'}
          name={'cardHoldersName'}
          title={ ['Cardholder\'s name'] }
          required={true}
          type={'text'}
          placeholder={'John Smith'}
          value={cardHoldersName}
          onChange={handleChangeValue}
        />
        <Input
          pattern={regDate}
          placeholderColor={'Gray'}
          name={'expirationDate'}
          title={ ['Expiration Date'] }
          required={true}
          type={'text'}
          placeholder={'MM/YY'}
          value={expirationDate}
          onChange={handleChangeValue}
        />
        <Input
          pattern={regCVV}
          placeholderColor={'Gray'}
          name={'CVV'}
          title={ ['CVV'] }
          required={true}
          type={'text'}
          placeholder={'123'}
          value={CVV}
          onChange={handleChangeValue}
        />
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
