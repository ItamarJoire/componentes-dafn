import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons'
import { Header } from './ui/Header'
import { Footer } from './ui/Footer'
import styles from './App.module.scss'
import { AppRoutes } from './routes'
import { useTheme } from './contexts'

export const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={styles['app-wrapper']}>
      <div className={styles['theme-toggle-bar']}>
        <button
          type="button"
          className={styles['theme-toggle-button']}
          aria-label={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
          onClick={toggleTheme}
        >
          <FontAwesomeIcon icon={faCircleHalfStroke} style={{ width: 14, height: 14 }} />
        </button>
      </div>
      <Header />
      <main className={styles['app-main']} style={{ padding: '40px 0' }}>
        <AppRoutes />
      </main>
      <Footer />
    </div>
  )
}
