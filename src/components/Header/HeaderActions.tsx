import React from 'react';
import type { HeaderActionsProps } from './types';
import { GridIcon, UserIcon } from './icons';

/**
 * Botões de ação do header: "Atalhos gov.br" (outline) e "Entrar com gov.br" (preenchido).
 * Em telas pequenas, o sufixo "com gov.br" some via CSS (.gb-hide-mobile-inline),
 * restando apenas "Entrar".
 */
const HeaderActions: React.FC<HeaderActionsProps> = ({
  atalhosLabel = 'Atalhos gov.br',
  atalhosHref = '#',
  entrarShortLabel = 'Entrar',
  entrarSuffix = ' com gov.br',
  entrarHref = '#',
}) => {
  return (
    <div className="gb-header__actions">
      <a className="gb-btn gb-btn--outline" href={atalhosHref}>
        <GridIcon size={16} />
        <span>{atalhosLabel}</span>
      </a>
      <a className="gb-btn gb-btn--filled" href={entrarHref}>
        <UserIcon size={16} />
        <span>
          {entrarShortLabel}
          <span className="gb-hide-mobile-inline">{entrarSuffix}</span>
        </span>
      </a>
    </div>
  );
};

export default HeaderActions;
