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

export interface SubMenuLink {
  id: string
  label: string
  href: string
}

export interface TopNavLink {
  id: string
  label: string
  href?: string
  dropdownItems?: SubMenuLink[]
}

export interface NavProps {
  links: TopNavLink[]
  ariaLabel?: string
}

export interface SearchProps {
  placeholder?: string
  onSearch?: (query: string) => void
}

export interface MenuSection {
  id: string
  label: string
  href?: string
  submenu?: SubMenuLink[]
}

export type SocialIconName = 'x' | 'youtube' | 'facebook' | 'flickr' | 'instagram'

export interface SocialLink {
  id: string
  label: string
  href: string
  icon: SocialIconName
}

export interface MenuPanelProps {
  menuSections: MenuSection[]
  activeSectionId?: string
  onSectionSelect: (sectionId: string) => void
  usefulLinksTitle?: string
  usefulLinks?: SubMenuLink[]
  socialLinksTitle?: string
  socialLinks?: SocialLink[]
}
