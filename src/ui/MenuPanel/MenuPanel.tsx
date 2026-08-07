import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronRight, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import type { MenuPanelProps } from './types'
import styles from './MenuPanel.module.scss'

export const MenuPanel: React.FC<MenuPanelProps> = ({ menuSections, openSectionIds = [], onSectionToggle }) => {
  return (
    <div className={styles['panel']}>
      <ul className={styles['groups']}>
        {menuSections.map(section => {
          const isOpen = openSectionIds.includes(section.id)

          return (
            <li key={section.id} className={styles['group']}>
              <button
                type="button"
                className={styles['group-trigger']}
                aria-expanded={isOpen}
                onClick={() => onSectionToggle(section.id)}
              >
                {section.icon && <span className={styles['group-icon']}>{section.icon}</span>}
                <span className={styles['group-label']}>{section.label}</span>
                <FontAwesomeIcon
                  icon={isOpen ? faChevronUp : faChevronDown}
                  className={styles['group-chevron']}
                  style={{ width: 14, height: 14 }}
                />
              </button>

              {isOpen && section.submenu && (
                <ul className={styles['items']}>
                  {section.submenu.map(item => (
                    <li key={item.id}>
                      <a href={item.href} className={styles['item-link']}>
                        {item.icon && <span className={styles['item-icon']}>{item.icon}</span>}
                        <span className={styles['item-label']}>{item.label}</span>
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          className={styles['item-chevron']}
                          style={{ width: 12, height: 12 }}
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
