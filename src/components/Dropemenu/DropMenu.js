import { Link } from 'react-router-dom'
import React from 'react'
import styles from './DropMenu.module.scss'

export const Dropdown = ({ dropdown }) => {
  return (
    <div className={dropdown ? styles.dropdownShow : styles.dropdown}>
      <Link to='/' className={styles.dropdownItem}>
        <div>
          <span> Partner login </span>
        </div>
      </Link>
    </div>
  )
}
