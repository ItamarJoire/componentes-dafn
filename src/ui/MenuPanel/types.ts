import type { SubMenuLink } from '../Nav/types'

export type { SubMenuLink } from '../Nav/types'

export type SocialIconName = 'x' | 'youtube' | 'facebook' | 'flickr' | 'instagram'

export interface SocialLink {
  id: string
  label: string
  href: string
  icon: SocialIconName
}

export interface MenuSection {
  id: string
  label: string
  href?: string
  submenu?: SubMenuLink[]
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
