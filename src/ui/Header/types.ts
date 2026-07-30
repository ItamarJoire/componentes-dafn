import type { MouseEvent, ReactNode } from 'react'
import type { MenuSection, SocialLink } from '../MenuPanel/types'
import type { SubMenuLink, TopNavLink } from '../Nav/types'

export type { MenuSection, SocialIconName, SocialLink } from '../MenuPanel/types'
export type { SubMenuLink, TopNavLink } from '../Nav/types'

export type HeaderButtonVariant = 'primary' | 'secondary' | 'tertiary'

export interface HeaderButtonProps {
  variant?: HeaderButtonVariant
  href?: string
  icon?: ReactNode
  onClick?: (event: MouseEvent<HTMLElement>) => void
  ariaLabel?: string
  className?: string
  children: ReactNode
}

export interface HeaderActionsProps {
  children: ReactNode
  className?: string
}

export interface HeaderProps {
  ministryName?: string
  institutionName?: string
  systemName?: string
  logoHref?: string
  topNavLinks?: TopNavLink[]
  atalhosLabel?: string
  atalhosHref?: string
  entrarShortLabel?: string
  entrarSuffix?: string
  entrarHref?: string
  searchPlaceholder?: string
  onSearch?: (query: string) => void
  showMenuPanel?: boolean
  menuSections?: MenuSection[]
  defaultActiveSectionId?: string
  usefulLinksTitle?: string
  usefulLinks?: SubMenuLink[]
  socialLinksTitle?: string
  socialLinks?: SocialLink[]
  showAccessibilityWidget?: boolean
}
