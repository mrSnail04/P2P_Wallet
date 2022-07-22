import React from 'react'
import styles from './Summary.module.scss'
import watch from '../../assets/icons/watch.svg'
import { useDispatch, useSelector } from 'react-redux'
import { countBuySelector, countSellSelector, updateRate } from '../../store/countSlice'

export const Summary = ({
  buyName,
  sellName
}) => {
  const countSell = useSelector(countSellSelector)
  const countBuy = useSelector(countBuySelector)
  const dispatch = useDispatch()
  const [counter, setCounter] = React.useState(3)

  React.useEffect(() => {
    counter >= 0 ? setTimeout(() => setCounter(counter - 1), 1000) : resetCounter()
  }, [counter])

  const resetCounter = () => {
    dispatch(updateRate(45792))
    setCounter(3)
  }
  return (
    <div className={styles.summaryWrap}>
      <div className={styles.summaryTitleBlock}>
        <p className={styles.title}> Summary </p>
        <div className={styles.priceRenewal}>
          <img src={watch} alt={'watch icon'}/>
          <p className={styles.counterWrap}>
            Price renewal in {counter} seconds...
          </p>
        </div>
      </div>
      <div className={styles.summary}>
        <p>
          You will receive
          <span> {countBuy} {buyName} </span>
          for
          <span> {countSell} {sellName}</span>
        </p>
      </div>
    </div>
  )
}
