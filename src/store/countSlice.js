import { createSlice } from '@reduxjs/toolkit'
import { cutZero } from '../utils/CutZero'

const initialState = {
  openHamburger: false,
  countBuy: '',
  countSell: '',
  typeBuy: 'btc',
  typeSell: 'usd',
  rate: 20600,
  page: '1',
  walletAddress: '',
  cardNumber: '',
  cardHoldersName: '',
  expirationDate: '',
  CVV: ''
}
export const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    changeOpenHamburger: (state, action) => {
      state.openHamburger = action.payload
    },
    updateWalletAddress: (state, action) => {
      state.walletAddress = action.payload
    },
    updateTypeBuy: (state, action) => {
      state.typeBuy = action.payload
    },
    updateTypeSell: (state, action) => {
      state.typeSell = action.payload
    },
    updateSell: (state, action) => {
      if (!action.payload) {
        state.countSell = ''
        state.countBuy = ''
        return
      }
      const buyCountSum = cutZero((parseFloat(action.payload) / state.rate).toFixed(5))
      state.countSell = action.payload
      state.countBuy = buyCountSum
    },
    updateBuy: (state, action) => {
      if (!action.payload) {
        state.countSell = ''
        state.countBuy = ''
        return
      }
      const sellCount = cutZero((parseFloat(action.payload) * state.rate).toFixed(2))
      state.countBuy = action.payload
      state.countSell = sellCount
    },
    updateRate: (state, action) => {
      if (!state.countSell && !parseFloat(state.countSell)) {
        return
      }
      const buyCountSum = cutZero((parseFloat(state.countSell) / action.payload).toFixed(5))
      state.rate = action.payload
      state.countBuy = buyCountSum
    },
    changePage: (state, action) => {
      state.page = action.payload
    },
    updateCardNumber: (state, action) => {
      state.cardNumber = action.payload
    },
    updateCardHoldersName: (state, action) => {
      state.cardHoldersName = action.payload
    },
    updateExpirationDate: (state, action) => {
      state.expirationDate = action.payload
    },
    updateCVV: (state, action) => {
      state.CVV = action.payload
    }
  }
})

export const openHamburgerSelector = (state) => state.count.openHamburger
export const typeBuySelector = (state) => state.count.typeBuy
export const typeSellSelector = (state) => state.count.typeSell
export const countSellSelector = (state) => state.count.countSell
export const countBuySelector = (state) => state.count.countBuy
export const rateSelector = (state) => state.count.rate
export const pageSelector = (state) => state.count.page
export const walletAddressSelector = (state) => state.count.walletAddress
export const cardNumberSelector = (state) => state.count.cardNumber
export const cardHoldersNameSelector = (state) => state.count.cardHoldersName
export const expirationDateSelector = (state) => state.count.expirationDate
export const CVVSelector = (state) => state.count.CVV
export const {
  updateTypeBuy,
  updateTypeSell,
  updateSell,
  updateBuy,
  updateRate,
  changePage,
  updateWalletAddress,
  updateCardNumber,
  updateCardHoldersName,
  updateExpirationDate,
  updateCVV,
  changeOpenHamburger
} = countSlice.actions

export default countSlice.reducer
