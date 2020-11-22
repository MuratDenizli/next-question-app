import React from 'react'
import cn from 'classnames'

import styles from './style.module.css'
import useWindowSize from '../../hooks/useWindowSize'
import CONST from '../../constants'

import Sidebar from '../sidebar'
import Main from '../main'

function Layout({ children }) {
  const size = useWindowSize()

  return (
    <div className={cn(styles.layout)}>
      <Sidebar flat={size.width < CONST.DESKTOP_SIZE}></Sidebar>

      <Main>{children}</Main>
    </div>
  )
}

export default Layout
