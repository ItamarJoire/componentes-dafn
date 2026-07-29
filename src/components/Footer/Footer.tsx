import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faFlickr, faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import type { FooterProps, SocialIconName } from './types'
import { defaultFooterColumns, defaultFooterSocialLinks } from './defaultData'
import styles from './Footer.module.scss'

const socialIcons: Record<SocialIconName, IconDefinition> = {
  x: faXTwitter,
  youtube: faYoutube,
  facebook: faFacebook,
  flickr: faFlickr,
  instagram: faInstagram
}

export const Footer: React.FC<FooterProps> = ({
  logoHref = '/',
  columns = defaultFooterColumns,
  socialLinksTitle = 'Redes Sociais',
  socialLinks = defaultFooterSocialLinks,
  licenseText = 'Instituto Nacional de Tecnologia da Informação - ITI. ',
  licenseName = 'Direitos reservados'
}) => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className={styles['iti-footer']}>
      <div className={styles['iti-footer-inner']}>
        {/* Logo e colunas de links institucionais */}
        <div className={styles['iti-footer-main']}>
          <a href={logoHref} className={styles['footer-logo']} aria-label="Página inicial gov.br">
            <img src="../src/assets/govbr-white.png" alt="Logo gov.br" width={90} height={32} />
          </a>

          <div className={styles['iti-footer-columns']}>
            {columns.map(column => (
              <div key={column.id} className={styles['iti-footer-column']}>
                <h2 className={styles['iti-footer-column-title']}>{column.title}</h2>
                <ul>
                  {column.links.map(link => (
                    <li key={link.id}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Cookies, redes sociais e acesso à informação */}
        <div className={styles['iti-footer-secondary']}>
          <div className={styles['iti-footer-social']}>
            <h2 className={styles['iti-footer-social-title']}>{socialLinksTitle}</h2>
            <ul>
              {socialLinks.map(social => (
                <li key={social.id}>
                  <a href={social.href} aria-label={social.label}>
                    <FontAwesomeIcon icon={socialIcons[social.icon]} style={{ width: 18, height: 18 }} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Licença de conteúdo e botão de voltar ao topo */}
        <div className={styles['iti-footer-bottom']}>
          <p>
            {licenseText} <strong>{licenseName}</strong>
          </p>

          <button
            type="button"
            className={styles['iti-footer-top-fab']}
            aria-label="Voltar ao topo"
            onClick={handleScrollToTop}
          >
            <FontAwesomeIcon icon={faChevronUp} style={{ width: 18, height: 18 }} />
          </button>
        </div>
      </div>
    </footer>
  )
}
