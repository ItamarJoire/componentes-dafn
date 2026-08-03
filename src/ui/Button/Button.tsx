import React from 'react'
import type { ButtonProps } from './types'
import styles from './Button.module.scss'

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  href,
  target,
  icon,
  onClick,
  ariaLabel,
  className = '',
  children
}) => {
  const classes = `${styles['btn']} ${styles[`btn-${variant}`]}${className ? ` ${className}` : ''}`

  if (href) {
    return (
      <a
        className={classes}
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        onClick={onClick}
        aria-label={ariaLabel}
      >
        {icon}
        <span>{children}</span>
      </a>
    )
  }

  return (
    <button type="button" className={classes} onClick={onClick} aria-label={ariaLabel}>
      {icon}
      <span>{children}</span>
    </button>
  )
}
