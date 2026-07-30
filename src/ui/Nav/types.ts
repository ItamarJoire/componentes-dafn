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
