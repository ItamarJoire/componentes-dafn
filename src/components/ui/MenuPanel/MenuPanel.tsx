import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faFlickr, faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import type { MenuPanelProps, SocialIconName } from '../../types'
import styles from './MenuPanel.module.scss'

const socialIcons: Record<SocialIconName, IconDefinition> = {
  x: faXTwitter,
  youtube: faYoutube,
  facebook: faFacebook,
  flickr: faFlickr,
  instagram: faInstagram
}

export const MenuPanel: React.FC<MenuPanelProps> = ({
  menuSections,
  activeSectionId,
  onSectionSelect,
  usefulLinksTitle = 'Links Úteis',
  usefulLinks = [],
  socialLinksTitle = 'Redes Sociais',
  socialLinks = []
}) => {
  const activeSection = menuSections.find(s => s.id === activeSectionId)

  return (
    <>
      {/* Painel de menu para telas grandes */}
      <div className={styles['desktop']}>
        <nav className={styles['nav']} aria-label="Assuntos do site">
          <ul>
            {menuSections.map(section => (
              <li key={section.id}>
                <button
                  type="button"
                  className={`${styles['nav-link']} ${section.id === activeSectionId ? styles['is-active'] : ''}`}
                  onClick={() => onSectionSelect(section.id)}
                >
                  {section.label}
                  {section.submenu && <FontAwesomeIcon icon={faChevronRight} style={{ width: 16, height: 16 }} />}
                </button>
              </li>
            ))}
          </ul>
          <div className={styles['govbr']}>
            <button type="button" className={styles['nav-link']}>
              gov.br
              <FontAwesomeIcon icon={faChevronRight} style={{ width: 16, height: 16 }} />
            </button>
          </div>
        </nav>

        <div className={styles['content']}>
          {activeSection?.submenu ? (
            <ul className={styles['links']}>
              {activeSection.submenu.map(item => (
                <li key={item.id}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          ) : (
            <p className={styles['empty']}>Conteúdo de &ldquo;{activeSection?.label}&rdquo; em breve.</p>
          )}
        </div>
      </div>

      {/* Menu para telas pequenas */}
      <div className={styles['mobile']}>
        <ul className={styles['nav-mobile']}>
          {menuSections.map(section => (
            <li key={section.id}>
              <button
                type="button"
                className={`${styles['nav-link']} ${section.id === activeSectionId ? styles['is-active'] : ''}`}
                onClick={() => onSectionSelect(section.id)}
              >
                {section.label}
                {section.submenu && <FontAwesomeIcon icon={faChevronRight} style={{ width: 16, height: 16 }} />}
              </button>
              {section.id === activeSectionId && section.submenu && (
                <ul className={`${styles['links']} ${styles['links-nested']}`}>
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

        <div className={styles['section']}>
          <button type="button" className={styles['nav-link']}>
            gov.br
            <FontAwesomeIcon icon={faChevronRight} style={{ width: 16, height: 16 }} />
          </button>
        </div>

        <div className={styles['section']}>
          <h2 className={styles['section-title']}>{usefulLinksTitle}</h2>
          <ul className={styles['useful-links']}>
            {usefulLinks.map(link => (
              <li key={link.id}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles['section']}>
          <h2 className={styles['section-title']}>{socialLinksTitle}</h2>
          <ul className={styles['social-links']}>
            {socialLinks.map(social => (
              <li key={social.id}>
                <a href={social.href} aria-label={social.label}>
                  <FontAwesomeIcon icon={socialIcons[social.icon]} style={{ width: 20, height: 20 }} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
