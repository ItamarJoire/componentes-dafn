import type { MouseEvent, ReactNode } from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary'

export interface ButtonProps {
  /** Estilo visual do botão. @default 'primary' */
  variant?: ButtonVariant
  /** Se informado, o botão vira um link (<a>); senão, vira um <button>. */
  href?: string
  /** Ícone exibido antes do texto (ex: <FontAwesomeIcon icon={faUser} />). */
  icon?: ReactNode
  onClick?: (event: MouseEvent<HTMLElement>) => void
  ariaLabel?: string
  className?: string
  children: ReactNode
}
