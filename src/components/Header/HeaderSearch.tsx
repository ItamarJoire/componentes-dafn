import React, { useState } from 'react';
import type { HeaderSearchProps } from './types';
import { MicIcon, SearchIcon } from './icons';

/**
 * Campo de busca do header, com botão de busca por voz e de busca por texto.
 * Mantém o próprio estado do texto digitado e avisa o componente pai via `onSearch`.
 * Em telas pequenas, o input some via CSS, restando apenas os ícones.
 */
const HeaderSearch: React.FC<HeaderSearchProps> = ({
  placeholder = 'O que você procura?',
  onSearch,
}) => {
  const [value, setValue] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch?.(value);
  };

  return (
    <form className="gb-header__search" role="search" onSubmit={handleSubmit}>
      <input
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
      />
      <button type="button" className="gb-icon-btn" aria-label="Busca por voz">
        <MicIcon size={18} />
      </button>
      <button type="submit" className="gb-icon-btn" aria-label="Buscar">
        <SearchIcon size={18} />
      </button>
    </form>
  );
};

export default HeaderSearch;
