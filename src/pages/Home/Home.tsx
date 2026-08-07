import { PageTitle, Button } from '../../ui'
import styles from './Home.module.scss'

export const Home = () => {
  return (
    <div className={styles['home']} style={{ backgroundColor: 'var(--blue-warm-vivid-90)' }}>
      <PageTitle title="Página principal" />
      <div className={styles['hero']}>
        <h1>Componentes-dafn</h1>
        <p>Base de componentes React + TypeScript + Vite, construída sobre os tokens do gov.br Design System.</p>
        <div className={styles['actions']}>
          <Button
            variant="tertiary"
            href="https://itamarjoire.github.io/doc-dafn/"
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
