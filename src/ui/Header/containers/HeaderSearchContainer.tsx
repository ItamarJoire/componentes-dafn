import React from 'react'
import type { HeaderActionsProps } from '../types'
import styles from './HeaderSearchContainer.module.scss'

export const HeaderSearchContainer: React.FC<HeaderActionsProps> = ({ children, className = '' }) => {
  return <div className={styles['header-search-container'] + (className ? ` ${className}` : '')}>{children}</div>
}
