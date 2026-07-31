import { PageTitle } from '../../ui'
import styles from './Home.module.scss'

export const Home = () => {
  return (
    <div className={styles['home']}>
      <PageTitle title="Página principal" />
      <h1>Bem-vindo à página principal</h1>
      <h2>
        <a href="/login" style={{ textDecoration: 'underline' }}>
          Ir para login
        </a>
      </h2>
    </div>
  )
}
