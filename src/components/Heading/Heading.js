import React from 'react'
import cn from 'classnames'

import styles from './Heading.module.scss'

const Heading = ({
  level,
  color,
  className,
  children,
  id
}) => {
  const el = `h${level}`

  return React.createElement(el, {
    className: cn(
      styles.root,
      className,
      styles[`level${level}`],
      styles[`color${color}`]
    ),
    id
  }, children)
}

export default Heading
