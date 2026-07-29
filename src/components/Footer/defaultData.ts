import type { SocialLink } from '../types'
import type { FooterColumn } from './types'

export const defaultFooterColumns: FooterColumn[] = [
  {
    id: 'assuntos',
    title: 'Assuntos',
    links: [
      { id: 'auditoria-icp', label: 'Auditoria ICP-Brasil', href: '#' },
      { id: 'car', label: 'Cadastro de Agente de Registro - CAR', href: '#' }
    ]
  },
  {
    id: 'acesso-informacao',
    title: 'Acesso à Informação',
    links: [
      { id: 'institucional', label: 'Institucional', href: '#' },
      { id: 'acoes-programas', label: 'Ações e Programas', href: '#' }
    ]
  },
  {
    id: 'centrais-conteudo',
    title: 'Centrais de Conteúdo',
    links: [
      { id: 'aplicativos', label: 'Aplicativos', href: '#' },
      { id: 'glossario', label: 'Glossário', href: '#' }
    ]
  },
  {
    id: 'canais-atendimento',
    title: 'Canais de Atendimento',
    links: [
      { id: 'imprensa', label: 'Imprensa', href: '#' },
      { id: 'ouvidoria', label: 'Ouvidoria ITI', href: '#' }
    ]
  },
  {
    id: 'redes-sociais-canais',
    title: 'Redes Sociais/Canais',
    links: [
      { id: 'facebook-link', label: 'Facebook', href: '#' },
      { id: 'twitter-link', label: 'Twitter', href: '#' }
    ]
  },
  {
    id: 'endereco',
    title: 'Endereço',
    links: []
  }
]

export const defaultFooterSocialLinks: SocialLink[] = [
  { id: 'x', label: 'X (Twitter)', href: '#', icon: 'x' },
  { id: 'youtube', label: 'YouTube', href: '#', icon: 'youtube' },
  { id: 'facebook', label: 'Facebook', href: '#', icon: 'facebook' },
  { id: 'flickr', label: 'Flickr', href: '#', icon: 'flickr' },
  { id: 'instagram', label: 'Instagram', href: '#', icon: 'instagram' }
]
