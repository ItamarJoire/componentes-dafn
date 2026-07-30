import type { MenuSection, SocialLink, SubMenuLink } from './types'

const assuntosSubmenu: SubMenuLink[] = [
  { id: 'auditoria-icp', label: 'Auditoria ICP-Brasil', href: '#' },
  { id: 'car', label: 'Cadastro de Agente de Registro - CAR', href: '#' },
  { id: 'comite-gestor', label: 'Comitê Gestor', href: '#' },
  { id: 'consulta-publica', label: 'Consulta Pública', href: '#' },
  { id: 'credenciamento', label: 'Credenciamento', href: '#' },
  { id: 'fiscalizacao', label: 'Fiscalização', href: '#' },
  { id: 'homologacao', label: 'Homologação', href: '#' },
  { id: 'icp-brasil', label: 'ICP-Brasil', href: '#' },
  { id: 'legislacao', label: 'Legislação', href: '#' },
  { id: 'noticias', label: 'Notícias', href: '#' },
  { id: 'protocolo-digital', label: 'Protocolo Digital ITI', href: '#' },
  { id: 'publicacoes-tecnicas', label: 'Publicações Técnicas', href: '#' },
  { id: 'repositorio', label: 'Repositório', href: '#' },
  { id: 'navegadores', label: 'Navegadores', href: '#' },
  { id: 'carteira-identidade', label: 'Carteira de Identidade Nacional', href: '#' },
  { id: 'assinatura-eletronica', label: 'Assinatura eletrônica avançada', href: '#' }
]

export const defaultMenuSections: MenuSection[] = [
  { id: 'assuntos', label: 'Assuntos', submenu: assuntosSubmenu },
  { id: 'acesso-informacao', label: 'Acesso à Informação', href: '#' },
  { id: 'centrais-conteudo', label: 'Centrais de Conteúdo', href: '#' },
  { id: 'canais-atendimento', label: 'Canais de Atendimento', href: '#' },
  { id: 'redes-sociais-canais', label: 'Redes Sociais/Canais', href: '#' },
  { id: 'endereco', label: 'Endereço', href: '#' }
]

export const defaultUsefulLinks: SubMenuLink[] = [
  { id: 'galeria-aplicativos', label: 'Galeria de Aplicativos', href: '#' },
  { id: 'participe', label: 'Participe', href: '#' }
]

export const defaultSocialLinks: SocialLink[] = [
  { id: 'x', label: 'X (Twitter)', href: '#', icon: 'x' },
  { id: 'youtube', label: 'YouTube', href: '#', icon: 'youtube' },
  { id: 'facebook', label: 'Facebook', href: '#', icon: 'facebook' },
  { id: 'flickr', label: 'Flickr', href: '#', icon: 'flickr' },
  { id: 'instagram', label: 'Instagram', href: '#', icon: 'instagram' }
]
