import React, { useEffect, useRef, useState } from 'react';
import type { HeaderNavProps } from './types';
import { ChevronDownIcon } from './icons';

/**
 * Menu de navegação institucional (ex: "Institucional", "Acessibilidade",
 * "Participe"). Qualquer link com `dropdownItems` vira um botão que abre um
 * submenu; os demais são links simples.
 *
 * Controla sozinho qual dropdown está aberto (por id), então funciona com
 * quantos links com dropdown você quiser — não fica preso a um único item.
 */
const HeaderNav: React.FC<HeaderNavProps> = ({ links, ariaLabel = 'Menu institucional' }) => {
  const [openId, setOpenId] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  // Fecha o dropdown aberto ao clicar fora do menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenId(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="gb-header__nav" aria-label={ariaLabel} ref={navRef}>
      <ul>
        {links.map((link) =>
          link.dropdownItems ? (
            <li key={link.id} className="gb-header__nav-item gb-header__nav-item--dropdown">
              <button
                type="button"
                className="gb-header__nav-link"
                aria-expanded={openId === link.id}
                onClick={() => setOpenId((current) => (current === link.id ? null : link.id))}
              >
                {link.label}
                <ChevronDownIcon size={14} />
              </button>
              {openId === link.id && (
                <ul className="gb-header__dropdown">
                  {link.dropdownItems.map((item) => (
                    <li key={item.id}>
                      <a href={item.href}>{item.label}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ) : (
            <li key={link.id} className="gb-header__nav-item">
              <a className="gb-header__nav-link" href={link.href}>
                {link.label}
              </a>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default HeaderNav;