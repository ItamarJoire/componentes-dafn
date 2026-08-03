import { PageTitle, Button } from '../../ui'
import styles from './Home.module.scss'

export const Home = () => {
  return (
    <div className={styles['home']} style={{ backgroundColor: 'var(--gray-5)' }}>
      <PageTitle title="Página principal" />
      <div className={styles['hero']}>
        <h1>Componentes-dafn</h1>
        <p>Base de componentes React + TypeScript + Vite, construída sobre os tokens do gov.br Design System.</p>
        <div className={styles['actions']}>
          <Button
            variant="secondary"
            href="https://www.gov.br/ds/"
            target="_blank"
            ariaLabel="Ver documentação do gov.br Design System"
          >
            Ver documentação
          </Button>
        </div>
      </div>
    </div>
  )
}
