import type { SocialLink } from '../MenuPanel/types'
import type { SubMenuLink } from '../Nav/types'

export type { SocialIconName, SocialLink } from '../MenuPanel/types'
export type { SubMenuLink } from '../Nav/types'

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
