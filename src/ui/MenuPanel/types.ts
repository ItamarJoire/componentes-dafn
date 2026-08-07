import type { ReactNode } from 'react'

export type SocialIconName = 'x' | 'youtube' | 'facebook' | 'flickr' | 'instagram'

export interface SocialLink {
  id: string
  label: string
  href: string
  icon: SocialIconName
}

export interface MenuPanelItem {
  id: string
  label: string
  href: string
  icon?: ReactNode
}

export interface MenuSection {
  id: string
  label: string
  icon?: ReactNode
  href?: string
  submenu?: MenuPanelItem[]
}

export interface MenuPanelProps {
  menuSections: MenuSection[]
  openSectionIds?: string[]
  onSectionToggle: (sectionId: string) => void
}
