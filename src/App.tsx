import { useState } from 'react'
import { Header } from './ui/Header'
import { Footer } from './ui/Footer'
import { MenuPanel, defaultMenuSections } from './ui/MenuPanel'
import styles from './App.module.scss'
import { AppRoutes } from './routes'

export const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openSectionIds, setOpenSectionIds] = useState<string[]>(
    defaultMenuSections[0] ? [defaultMenuSections[0].id] : []
  )

  const handleSectionToggle = (sectionId: string) => {
    setOpenSectionIds(current =>
      current.includes(sectionId) ? current.filter(id => id !== sectionId) : [...current, sectionId]
    )
  }

  return (
    <div className={styles['app-wrapper']}>
      <Header isMenuOpen={isMenuOpen} onMenuToggleClick={() => setIsMenuOpen(v => !v)} />

      <div className={styles['app-body']}>
        {isMenuOpen && (
          <MenuPanel
            menuSections={defaultMenuSections}
            openSectionIds={openSectionIds}
            onSectionToggle={handleSectionToggle}
          />
        )}

        <main className={styles['app-main']} style={{ padding: '40px 0' }}>
          <AppRoutes />
        </main>
      </div>

      <Footer />
    </div>
  )
}
