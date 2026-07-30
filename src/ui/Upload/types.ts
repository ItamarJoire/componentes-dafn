export interface UploadProps {
  label?: string
  /** Texto exibido dentro da área de upload. @default 'Selecione o(s) arquivo(s)' */
  buttonText?: string
  /** Texto de ajuda exibido abaixo da área de upload. */
  helperText?: string
  /** Tipos de arquivo aceitos (ex: '.pdf,.jpg' ou 'image/*'). */
  accept?: string
  /** Permite selecionar mais de um arquivo. @default false */
  multiple?: boolean
  disabled?: boolean
  /** Chamado com os arquivos selecionados (via clique ou arraste). */
  onFilesSelected?: (files: File[]) => void
  className?: string
}
