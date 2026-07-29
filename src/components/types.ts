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

export type InputType = 'text' | 'number' | 'password' | 'textarea' | 'dropdown' | 'tel' | 'cpf'

export type InputStatus = 'default' | 'success' | 'warning' | 'error'

export interface InputOption {
  label: string
  value: string
}

export interface InputProps {
  /** Id do campo. Se não informado, é gerado automaticamente (usado para ligar label + input). */
  id?: string
  label?: string
  /** Variante do campo. @default 'text' */
  type?: InputType
  value: string
  onChange: (value: string) => void
  placeholder?: string
  /** Texto de ajuda exibido abaixo do campo (some quando `message` é informado). */
  helperText?: string
  /** Estado visual do campo, usado junto de `message` para alertas/avisos. @default 'default' */
  status?: InputStatus
  /** Mensagem de alerta/aviso/sucesso/erro exibida abaixo do campo. */
  message?: string
  /** Ícone exibido à esquerda (ex: <FontAwesomeIcon icon={faUser} />). */
  icon?: ReactNode
  /** Opções do dropdown, usado quando `type="dropdown"`. */
  options?: InputOption[]
  disabled?: boolean
  required?: boolean
  name?: string
  /** Número de linhas do textarea. @default 4 */
  rows?: number
  className?: string
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

export interface AccordionItem {
  id: string
  title: string
  content: ReactNode
}

export interface AccordionProps {
  items: AccordionItem[]
  /** Permite mais de um item aberto ao mesmo tempo. @default false */
  allowMultiple?: boolean
  /** Ids dos itens abertos inicialmente. */
  defaultOpenIds?: string[]
  className?: string
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
