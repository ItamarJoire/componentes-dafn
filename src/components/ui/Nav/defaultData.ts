import type { TopNavLink } from '../../types'

export const defaultTopNavLinks: TopNavLink[] = [
  {
    id: 'institucional',
    label: 'Institucional',
    dropdownItems: [
      { id: 'quem-somos', label: 'Quem somos', href: '#' },
      { id: 'estrutura', label: 'Estrutura organizacional', href: '#' },
      { id: 'legislacao', label: 'Legislação', href: '#' }
    ]
  },
  { id: 'acessibilidade', label: 'Acessibilidade', href: '#' },
  { id: 'participe', label: 'Participe', href: '#' }
]
