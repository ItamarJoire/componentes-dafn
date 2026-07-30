import { Link } from 'react-router-dom'
import { PageTitle } from '../../ui'
import styles from './NotFound.module.scss'

export const NotFound = () => {
  return (
    <div className={styles['not-found']}>
      <PageTitle title="Página não encontrada" />
      <h1>404</h1>
      <p>A página que você está procurando não foi encontrada.</p>
      <Link to="/">Voltar para a página principal</Link>
    </div>
  )
}
