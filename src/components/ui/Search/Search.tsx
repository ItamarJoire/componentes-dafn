import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faMicrophone } from '@fortawesome/free-solid-svg-icons'
import type { SearchProps } from '../../types'
import styles from './Search.module.scss'

export const Search: React.FC<SearchProps> = ({ placeholder = 'O que você procura?', onSearch }) => {
  const [value, setValue] = useState('')

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    onSearch?.(value)
  }

  return (
    <form className={styles['search']} role="search" onSubmit={handleSubmit}>
      <input
        type="search"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
      />
      <button type="button" className={styles['search-icon-btn']} aria-label="Busca por voz">
        <FontAwesomeIcon icon={faMicrophone} style={{ width: 18, height: 18 }} />
      </button>
      <button type="submit" className={styles['search-icon-btn']} aria-label="Buscar">
        <FontAwesomeIcon icon={faMagnifyingGlass} style={{ width: 18, height: 18 }} />
      </button>
    </form>
  )
}
