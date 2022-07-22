import React from 'react'
import {
  changePage,
  updateBuy,
  updateCardHoldersName,
  updateCardNumber,
  updateCVV,
  updateExpirationDate,
  updateSell,
  updateWalletAddress
} from '../store/countSlice'
import { useDispatch } from 'react-redux'

export const ClearState = () => {
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(updateSell(''))
    dispatch(updateBuy(''))
    dispatch(updateWalletAddress(''))
    dispatch(updateCardNumber(''))
    dispatch(updateCardHoldersName(''))
    dispatch(updateExpirationDate(''))
    dispatch(updateCVV(''))
    dispatch(changePage('1'))
  })
}
