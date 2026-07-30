import { PageTitle } from '../../ui'
import styles from './Login.module.scss'

export const Login = () => {
  return (
    <div className={styles['login']}>
      <PageTitle title="Login" />
      <a href="/login">Link para login</a>
      <h1>LOGIN</h1>
      <p>Faça seu login</p>
    </div>
  )
}
