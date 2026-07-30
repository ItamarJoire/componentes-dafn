import React from 'react'
import type { HeaderActionsProps } from '../types'
import styles from './HeaderNavContainer.module.scss'

export const HeaderNavContainer: React.FC<HeaderActionsProps> = ({ children, className = '' }) => {
  return <div className={styles['header-nav-container'] + (className ? ` ${className}` : '')}>{children}</div>
}
