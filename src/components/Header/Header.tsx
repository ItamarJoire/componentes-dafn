import React, { useEffect, useRef, useState } from 'react'
import type { HeaderProps } from './types'
import {
  ChevronRightIcon,
  CloseIcon,
  ContrastIcon,
  GridIcon,
  HandIcon,
  KebabIcon,
  MenuIcon,
  PaletteIcon,
  SocialIcons,
  UserIcon
} from './icons'
import { defaultMenuSections, defaultSocialLinks, defaultTopNavLinks, defaultUsefulLinks } from './defaultData'
import { HeaderButtonContainer } from './HeaderButtonContainer'
import { Button } from '../Button'
import HeaderNav from './HeaderNav'
import HeaderSearch from './HeaderSearch'
import styles from './Header.module.scss'

export const Header: React.FC<HeaderProps> = ({
  ministryName = 'Ministério da Gestão e da Inovação em Serviços Públicos',
  institutionName = 'Instituto Nacional de Tecnologia da Informação',
  logoHref = '/',
  topNavLinks = defaultTopNavLinks,
  atalhosLabel = 'Atalhos gov.br',
  atalhosHref = '#',
  entrarShortLabel = 'Entrar',
  entrarSuffix = ' com gov.br',
  entrarHref = '#',
  searchPlaceholder = 'O que você procura?',
  onSearch,
  menuSections = defaultMenuSections,
  defaultActiveSectionId,
  usefulLinksTitle = 'Links Úteis',
  usefulLinks = defaultUsefulLinks,
  socialLinksTitle = 'Redes Sociais',
  socialLinks = defaultSocialLinks,
  showAccessibilityWidget = true
}) => {
  const [isDesktopPanelOpen, setIsDesktopPanelOpen] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileTopMenuOpen, setIsMobileTopMenuOpen] = useState(false)
  const [activeSectionId, setActiveSectionId] = useState(defaultActiveSectionId ?? menuSections[0]?.id)
  const [highContrast, setHighContrast] = useState(false)

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

  const activeSection = menuSections.find(s => s.id === activeSectionId)

  const handleMenuToggleClick = () => {
    setIsMobileMenuOpen(v => !v)
    setIsDesktopPanelOpen(v => !v)
  }

  const handleSectionClick = (sectionId: string) => {
    setActiveSectionId(sectionId)
  }

  const isPanelOpen = isDesktopPanelOpen || isMobileMenuOpen

  return (
    <header className={`${styles['gb-header']} ${highContrast ? styles['gb-header--contrast'] : ''}`}>
      {/* Barra utilitária (paleta / alto contraste) */}
      <div className={styles['gb-header__utility']}>
        <button type="button" className={styles['gb-icon-btn']} aria-label="Selecionar paleta de cores">
          <PaletteIcon size={18} />
        </button>
        <button
          type="button"
          className={styles['gb-icon-btn']}
          aria-label="Ativar alto contraste"
          aria-pressed={highContrast}
          onClick={() => setHighContrast(v => !v)}
        >
          <ContrastIcon size={18} />
        </button>
      </div>

      {/* Barra principal: logo, navegação institucional e ações */}
      <div className={styles['gb-header__main']}>
        <a href={logoHref} className={styles['gb-header__logo']} aria-label="Página inicial gov.br">
          <span className={styles['gb-logo']}>
            <span className={styles['gb-logo__gov']}>gov</span>
            <span className={styles['gb-logo__br']}>.br</span>
          </span>
        </a>

        <p className={styles['gb-header__ministry']}>{ministryName}</p>

        <HeaderNav links={topNavLinks} />

        <HeaderButtonContainer>
          <Button href={atalhosHref} icon={<GridIcon size={16} />}>
            {atalhosLabel}
          </Button>
          <Button variant="secondary" href={entrarHref} icon={<UserIcon size={16} />}>
            {entrarShortLabel}
            <span className={styles['gb-hide-mobile-inline']}>{entrarSuffix}</span>
          </Button>
        </HeaderButtonContainer>

        {/* Menu "kebab" visível apenas em telas pequenas */}
        <div className={styles['gb-header__kebab']} ref={kebabRef}>
          <button
            type="button"
            className={styles['gb-icon-btn']}
            aria-label="Mais opções"
            aria-expanded={isMobileTopMenuOpen}
            onClick={() => setIsMobileTopMenuOpen(v => !v)}
          >
            <KebabIcon size={20} />
          </button>
          {isMobileTopMenuOpen && (
            <ul className={styles['gb-header__kebab-menu']}>
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
      <div className={styles['gb-header__institution']}>
        <button
          type="button"
          className={`${styles['gb-icon-btn']} ${styles['gb-header__menu-toggle']}`}
          aria-label={isPanelOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isPanelOpen}
          onClick={handleMenuToggleClick}
        >
          {isPanelOpen ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
        </button>

        <h1 className={styles['gb-header__title']}>{institutionName}</h1>

        <HeaderSearch placeholder={searchPlaceholder} onSearch={onSearch} />
      </div>

      {/* Painel de menu para telas grandes */}
      {isDesktopPanelOpen && (
        <div className={`${styles['gb-header__panel']} ${styles['gb-header__panel--desktop']}`}>
          <nav className={styles['gb-panel__nav']} aria-label="Assuntos do site">
            <ul>
              {menuSections.map(section => (
                <li key={section.id}>
                  <button
                    type="button"
                    className={`${styles['gb-panel__nav-link']} ${section.id === activeSectionId ? styles['is-active'] : ''}`}
                    onClick={() => handleSectionClick(section.id)}
                  >
                    {section.label}
                    {section.submenu && <ChevronRightIcon size={16} />}
                  </button>
                </li>
              ))}
            </ul>
            <div className={styles['gb-panel__govbr']}>
              <button type="button" className={styles['gb-panel__nav-link']}>
                gov.br
                <ChevronRightIcon size={16} />
              </button>
            </div>
          </nav>

          <div className={styles['gb-panel__content']}>
            {activeSection?.submenu ? (
              <ul className={styles['gb-panel__links']}>
                {activeSection.submenu.map(item => (
                  <li key={item.id}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className={styles['gb-panel__empty']}>Conteúdo de &ldquo;{activeSection?.label}&rdquo; em breve.</p>
            )}
          </div>
        </div>
      )}

      {/* Menu para telas pequenas */}
      {isMobileMenuOpen && (
        <div className={`${styles['gb-header__panel']} ${styles['gb-header__panel--mobile']}`}>
          <ul className={styles['gb-panel__nav-mobile']}>
            {menuSections.map(section => (
              <li key={section.id}>
                <button
                  type="button"
                  className={`${styles['gb-panel__nav-link']} ${section.id === activeSectionId ? styles['is-active'] : ''}`}
                  onClick={() => handleSectionClick(section.id)}
                >
                  {section.label}
                  {section.submenu && <ChevronRightIcon size={16} />}
                </button>
                {section.id === activeSectionId && section.submenu && (
                  <ul className={`${styles['gb-panel__links']} ${styles['gb-panel__links--nested']}`}>
                    {section.submenu.map(item => (
                      <li key={item.id}>
                        <a href={item.href}>{item.label}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <div className={styles['gb-panel__section']}>
            <button type="button" className={styles['gb-panel__nav-link']}>
              gov.br
              <ChevronRightIcon size={16} />
            </button>
          </div>

          <div className={styles['gb-panel__section']}>
            <h2 className={styles['gb-panel__section-title']}>{usefulLinksTitle}</h2>
            <ul className={styles['gb-panel__useful-links']}>
              {usefulLinks.map(link => (
                <li key={link.id}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles['gb-panel__section']}>
            <h2 className={styles['gb-panel__section-title']}>{socialLinksTitle}</h2>
            <ul className={styles['gb-panel__social-links']}>
              {socialLinks.map(social => {
                const Icon = SocialIcons[social.icon]
                return (
                  <li key={social.id}>
                    <a href={social.href} aria-label={social.label}>
                      {Icon && <Icon size={20} />}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      )}

      {/* Botão flutuante de acessibilidade */}
      {showAccessibilityWidget && (
        <button type="button" className={styles['gb-header__a11y-fab']} aria-label="Acessibilidade em Libras">
          <HandIcon size={24} />
        </button>
      )}
    </header>
  )
}
