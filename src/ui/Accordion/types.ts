import type { ReactNode } from 'react'

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
