import type { MouseEvent, ReactNode } from 'react'

export interface SubMenuLink {
  id: string
  label: string
  href: string
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

export interface TopNavLink {
  id: string
  label: string
  href?: string
  dropdownItems?: SubMenuLink[]
}

export interface HeaderNavProps {
  links: TopNavLink[]
  ariaLabel?: string
}

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

export interface HeaderSearchProps {
  placeholder?: string
  onSearch?: (query: string) => void
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
  menuSections?: MenuSection[]
  defaultActiveSectionId?: string
  usefulLinksTitle?: string
  usefulLinks?: SubMenuLink[]
  socialLinksTitle?: string
  socialLinks?: SocialLink[]
  showAccessibilityWidget?: boolean
}
