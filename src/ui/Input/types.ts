import type { ReactNode } from 'react'

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
