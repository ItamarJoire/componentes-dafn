import React from 'react';
import type { HeaderActionsProps } from './types';

/**
 * Container que agrupa os botões de ação do header. Não sabe nada sobre
 * "Atalhos" ou "Entrar" — apenas organiza em linha (com espaçamento) o que
 * for passado como children. Aceita 1, 2, 3 ou quantos HeaderButton forem
 * necessários:
 *
 *   <HeaderActions>
 *     <HeaderButton variant="secondary" href="#">Atalhos gov.br</HeaderButton>
 *     <HeaderButton variant="primary" href="#">Entrar com gov.br</HeaderButton>
 *   </HeaderActions>
 */
const HeaderActions: React.FC<HeaderActionsProps> = ({ children, className = '' }) => {
  return (
    <div className={`gb-header__actions${className ? ` ${className}` : ''}`}>
      {children}
    </div>
  );
};

export default HeaderActions;