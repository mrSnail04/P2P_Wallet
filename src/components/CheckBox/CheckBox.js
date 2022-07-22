import React from 'react'
import styles from './CheckBox.module.scss'

export const CheckBox = ({
  checked,
  onClick
}) => {
  return (
    <div className={styles.checkboxWrap}>
      <button onClick={onClick} className={checked ? styles.checkbox_checked : styles.checkbox}/>
      <p>
        Check this box to receive communications from MoonPay.
        You can unsubscribe at any time. We look after your data - see our privacy policy.*
      </p>
    </div>
  )
}
