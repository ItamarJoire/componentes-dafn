import type { SocialLink, SubMenuLink } from '../types'

export type { SocialIconName, SocialLink, SubMenuLink } from '../types'

export interface FooterColumn {
  id: string
  title: string
  links: SubMenuLink[]
}

export interface FooterProps {
  logoHref?: string
  columns?: FooterColumn[]
  cookiesLabel?: string
  onResetCookies?: () => void
  socialLinksTitle?: string
  socialLinks?: SocialLink[]
  accessibilityLabel?: string
  accessibilityHref?: string
  licenseText?: string
  licenseName?: string
}
