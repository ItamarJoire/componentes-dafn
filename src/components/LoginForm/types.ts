export interface LoginFormValues {
  cpf: string
  senha: string
}

export interface LoginFormProps {
  onSubmit?: (values: LoginFormValues) => void
  className?: string
}
