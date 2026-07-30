import type { ReactNode } from 'react'

export type TableColumnAlign = 'left' | 'center' | 'right'

export interface TableColumn<T> {
  key: string
  label: string
  /** Alinhamento do texto na coluna (cabeçalho e células). @default 'left' */
  align?: TableColumnAlign
  /** Customiza o conteúdo da célula. Por padrão exibe `row[key]`. */
  render?: (row: T) => ReactNode
}

export interface TableRowAction<T> {
  label: string
  icon: ReactNode
  onClick: (row: T) => void
}

export interface TablePagination {
  /** Página atual (1-indexada). */
  page: number
  pageSize: number
  totalItems: number
  /** @default [10, 20, 50] */
  pageSizeOptions?: number[]
  onPageChange: (page: number) => void
  onPageSizeChange: (pageSize: number) => void
}

export interface TableProps<T> {
  title?: string
  columns: TableColumn<T>[]
  data: T[]
  getRowId: (row: T) => string
  rowActions?: TableRowAction<T>[]
  /** Exibe checkboxes de seleção e a barra de ações em massa. @default false */
  selectable?: boolean
  onSearch?: (query: string) => void
  onMoreOptions?: () => void
  /** Chamado com os ids selecionados ao clicar em "Excluir". */
  onDelete?: (ids: string[]) => void
  /** Chamado com os ids selecionados ao clicar em "Download". */
  onDownload?: (ids: string[]) => void
  /** Se omitido, o rodapé de paginação não é exibido. */
  pagination?: TablePagination
  className?: string
}
