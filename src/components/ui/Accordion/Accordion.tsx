import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import type { AccordionProps } from '../../types'
import styles from './Accordion.module.scss'

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  defaultOpenIds = [],
  className = ''
}) => {
  const [openIds, setOpenIds] = useState<string[]>(defaultOpenIds)

  const toggle = (id: string) => {
    setOpenIds(current => {
      if (current.includes(id)) return current.filter(openId => openId !== id)
      return allowMultiple ? [...current, id] : [id]
    })
  }

  return (
    <div className={`${styles['accordion']}${className ? ` ${className}` : ''}`}>
      {items.map(item => {
        const isOpen = openIds.includes(item.id)
        const panelId = `accordion-panel-${item.id}`

        return (
          <div key={item.id} className={styles['accordion-item']}>
            <button
              type="button"
              className={styles['accordion-trigger']}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(item.id)}
            >
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`${styles['accordion-icon']}${isOpen ? ` ${styles['is-open']}` : ''}`}
              />
              <span className={styles['accordion-title']}>{item.title}</span>
            </button>

            {isOpen && (
              <div id={panelId} className={styles['accordion-panel']}>
                {item.content}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
