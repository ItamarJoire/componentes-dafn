import React from 'react'
import type { HeaderButtonProps } from './types'

/**
 * Botão único e reutilizável do header. Cada botão declara seu próprio
 * componente e escolhe a variante:
 *
 *   <HeaderButton variant="primary" href="#">Entrar com gov.br</HeaderButton>
 *   <HeaderButton variant="secondary" href="#">Atalhos gov.br</HeaderButton>
 *   <HeaderButton variant="tertiary" href="#">Ajuda</HeaderButton>
 *
 * Se `href` for informado, renderiza um <a>; caso contrário, um <button>.
 */
const HeaderButton: React.FC<HeaderButtonProps> = ({
  variant = 'secondary',
  href,
  icon,
  onClick,
  ariaLabel,
  className = '',
  children
}) => {
  const classes = `gb-btn gb-btn--${variant}${className ? ` ${className}` : ''}`

  if (href) {
    return (
      <a className={classes} href={href} onClick={onClick} aria-label={ariaLabel}>
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

export default HeaderButton
