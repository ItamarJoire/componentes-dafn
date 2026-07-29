import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faEllipsisVertical, faHandsAslInterpreting, faUser, faXmark } from '@fortawesome/free-solid-svg-icons'
import type { HeaderProps } from './types'
import {
  Button,
  MenuPanel,
  Nav,
  Search,
  defaultMenuSections,
  defaultSocialLinks,
  defaultTopNavLinks,
  defaultUsefulLinks
} from '../ui'
import { HeaderButtonContainer, HeaderNavContainer, HeaderSearchContainer } from './componentes'
import styles from './Header.module.scss'

export const Header: React.FC<HeaderProps> = ({
  ministryName = 'Ministério da Gestão e da Inovação em Serviços Públicos',
  institutionName = 'Instituto Nacional de Tecnologia da Informação',
  systemName = 'Plano de Anual de Auditoria Operacional (PLAAO)',
  logoHref = '/',
  topNavLinks = defaultTopNavLinks,
  entrarShortLabel = 'Entrar',
  entrarSuffix = ' com GOV.BR',
  entrarHref = '#',
  searchPlaceholder = 'O que você procura?',
  onSearch,
  showMenuPanel = true,
  menuSections = defaultMenuSections,
  defaultActiveSectionId,
  usefulLinksTitle = 'Links Úteis',
  usefulLinks = defaultUsefulLinks,
  socialLinksTitle = 'Redes Sociais',
  socialLinks = defaultSocialLinks,
  showAccessibilityWidget = true
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobileTopMenuOpen, setIsMobileTopMenuOpen] = useState(false)
  const [activeSectionId, setActiveSectionId] = useState(defaultActiveSectionId ?? menuSections[0]?.id)

  const kebabRef = useRef<HTMLDivElement>(null)

  // Fecha o menu kebab (mobile) ao clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (kebabRef.current && !kebabRef.current.contains(event.target as Node)) {
        setIsMobileTopMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleMenuToggleClick = () => {
    setIsMenuOpen(v => !v)
  }

  const handleSectionSelect = (sectionId: string) => {
    setActiveSectionId(sectionId)
  }

  return (
    <header className={styles['iti-header']}>
      {/* Barra principal: logo, navegação institucional e ações */}
      <div className={styles['iti-header-main']}>
        <a href={logoHref} className={styles['header-logo']} aria-label="Página inicial gov.br">
          <img src="../src/assets/govbr.webp" alt="Logo gov.br" width={90} height={32} />
        </a>

        <p className={styles['iti-header-ministry']}>{ministryName}</p>

        <HeaderNavContainer>
          <Nav links={topNavLinks} />
        </HeaderNavContainer>

        <HeaderButtonContainer>
          <Button
            variant="primary"
            href={entrarHref}
            icon={<FontAwesomeIcon icon={faUser} style={{ width: 16, height: 16 }} />}
          >
            {entrarShortLabel}
            <span className={styles['hide-mobile-inline']}>{entrarSuffix}</span>
          </Button>
        </HeaderButtonContainer>

        {/* Menu "kebab" visível apenas em telas pequenas */}
        <div className={styles['iti-header-kebab']} ref={kebabRef}>
          <button
            type="button"
            className={styles['icon-btn']}
            aria-label="Mais opções"
            aria-expanded={isMobileTopMenuOpen}
            onClick={() => setIsMobileTopMenuOpen(v => !v)}
          >
            <FontAwesomeIcon icon={faEllipsisVertical} style={{ width: 20, height: 20 }} />
          </button>
          {isMobileTopMenuOpen && (
            <ul className={styles['iti-header-kebab-menu']}>
              {topNavLinks.map(link => (
                <li key={link.id}>
                  <a href={link.href ?? '#'}>{link.label}</a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Barra da instituição: alterna o menu lateral e concentra a busca */}
      <div className={styles['iti-header-institution']}>
        {showMenuPanel && (
          <button
            type="button"
            className={`${styles['icon-btn']} ${styles['iti-header-menu-toggle']}`}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
            onClick={handleMenuToggleClick}
          >
            <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} style={{ width: 20, height: 18 }} />
          </button>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <h1 className={styles['iti-header-title']}>{institutionName}</h1>
          <p className={styles['iti-header-paragh']}>{systemName}</p>
        </div>

        <HeaderSearchContainer>
          <Search placeholder={searchPlaceholder} onSearch={onSearch} />
        </HeaderSearchContainer>
      </div>

      {showMenuPanel && isMenuOpen && (
        <MenuPanel
          menuSections={menuSections}
          activeSectionId={activeSectionId}
          onSectionSelect={handleSectionSelect}
          usefulLinksTitle={usefulLinksTitle}
          usefulLinks={usefulLinks}
          socialLinksTitle={socialLinksTitle}
          socialLinks={socialLinks}
        />
      )}

      {/* Botão flutuante de acessibilidade */}
      {showAccessibilityWidget && (
        <button type="button" className={styles['iti-header-a11y-fab']} aria-label="Acessibilidade em Libras">
          <FontAwesomeIcon icon={faHandsAslInterpreting} style={{ width: 24, height: 24 }} />
        </button>
      )}
    </header>
  )
}
