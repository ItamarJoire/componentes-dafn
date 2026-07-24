import React from 'react'
import type { HeaderActionsProps } from './types'
import styles from './HeaderButtonContainer.module.scss'

export const HeaderButtonContainer: React.FC<HeaderActionsProps> = ({ children, className = '' }) => {
  return <div className={styles['header-button-container'] + (className ? ` ${className}` : '')}>{children}</div>
}

