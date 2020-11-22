import React from 'react'
import cn from 'classnames'

import styles from './style.module.css'

function Layout({children}) {
    return (
        <div className={cn(styles.layout)}>
          <div>sidebar</div>
    
          <div>main</div>
    
          <div>extra</div>
        </div>
      )
}

export default Layout