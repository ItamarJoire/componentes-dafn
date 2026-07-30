import { Header } from './ui/Header'
import { Footer } from './ui/Footer'
import styles from './App.module.scss'
import { AppRoutes } from './routes'

function App() {
  return (
    <div className={styles['app-wrapper']}>
      <Header />
      <main className={styles['app-main']} style={{ padding: '40px 0' }}>
        <AppRoutes />
      </main>
      <Footer />
    </div>
  )
}

export default App
