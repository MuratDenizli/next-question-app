import React from 'react'
import cn from 'classnames'

import Button from '../button'

import styles from './button.module.css'

function NavigationButton({ selected, children, className, ...props }) {
  return (
    <Button
      className={cn(
        styles.navButton,
        selected && styles.navButtonSelected,
        className
      )}
      {...props}
    >
      {children}
    </Button>
  )
}

export default NavigationButton
