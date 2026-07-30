import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import { Button, Input } from '../../ui'
import type { LoginFormProps, LoginFormValues } from './types'
import styles from './LoginForm.module.scss'

const initialValues: LoginFormValues = { cpf: '', senha: '' }

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, className = '' }) => {
  const [values, setValues] = useState<LoginFormValues>(initialValues)

  const handleChange = (field: keyof LoginFormValues) => (value: string) => {
    setValues(previous => ({ ...previous, [field]: value }))
  }

  const handleSubmit = () => {
    onSubmit?.(values)
  }

  return (
    <form className={`${styles['login-form']}${className ? ` ${className}` : ''}`}>
      <Input
        label="CPF"
        type="cpf"
        value={values.cpf}
        onChange={handleChange('cpf')}
        placeholder="000.000.000-00"
        helperText="Digite somente números"
        icon={<FontAwesomeIcon icon={faUser} style={{ width: 14, height: 14 }} />}
        required
      />

      <Input
        label="Senha"
        type="password"
        value={values.senha}
        onChange={handleChange('senha')}
        helperText="Digite sua senha de segurança"
        icon={<FontAwesomeIcon icon={faLock} style={{ width: 14, height: 14 }} />}
        required
      />

      <Button variant="primary" onClick={handleSubmit} className={styles['login-form-submit']}>
        Entrar
      </Button>
    </form>
  )
}
