import cn from 'classnames'
import React from 'react'
import Navigation from '../navigation/navigation'
import styles from './style.module.css'

function Sidebar({ flat }) {
  return (
    <div className={cn(styles.sidebar)}>
      <Navigation flat={flat} />
    </div>
  )
}

export default Sidebar
