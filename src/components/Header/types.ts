export interface SubMenuLink {
  id: string;
  label: string;
  href: string;
}

export interface MenuSection {
  id: string;
  label: string;
  href?: string;
  submenu?: SubMenuLink[];
}

export type SocialIconName =
  | 'x'
  | 'youtube'
  | 'facebook'
  | 'flickr'
  | 'instagram';

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: SocialIconName;
}

export interface TopNavLink {
  id: string;
  label: string;
  href?: string;
  dropdownItems?: SubMenuLink[];
}

/** Props do componente HeaderActions (botões "Atalhos gov.br" e "Entrar com gov.br") */
export interface HeaderActionsProps {
  atalhosLabel?: string;
  atalhosHref?: string;
  /** Texto sempre visível do botão de entrar (ex: "Entrar") */
  entrarShortLabel?: string;
  /** Complemento exibido apenas em telas maiores (ex: " com gov.br") */
  entrarSuffix?: string;
  entrarHref?: string;
}

/** Props do componente HeaderSearch (campo de busca com microfone e lupa) */
export interface HeaderSearchProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

export interface GovBrHeaderProps extends HeaderActionsProps {
  /** Nome do órgão superior, exibido ao lado da logo (ex: Ministério da Gestão...) */
  ministryName?: string;
  /** Nome do órgão/instituto, exibido na barra de busca */
  institutionName?: string;
  /** Destino do clique na logo gov.br */
  logoHref?: string;
  /** Links do menu superior (Institucional, Acessibilidade, Participe...) */
  topNavLinks?: TopNavLink[];
  searchPlaceholder?: string;
  onSearch?: (query: string) => void;
  /** Seções do menu lateral (mega menu) */
  menuSections?: MenuSection[];
  /** Id da seção ativa por padrão */
  defaultActiveSectionId?: string;
  usefulLinksTitle?: string;
  usefulLinks?: SubMenuLink[];
  socialLinksTitle?: string;
  socialLinks?: SocialLink[];
  /** Exibe o botão flutuante de acessibilidade (estilo VLibras) */
  showAccessibilityWidget?: boolean;
}
