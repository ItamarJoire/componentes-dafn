import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faAward, faBan, faBell, faBook, faHeart, faIdBadge, faScaleBalanced, faShieldHalved } from '@fortawesome/free-solid-svg-icons'
import type { MenuPanelItem, MenuSection } from './types'

const icon = (definition: IconDefinition) => React.createElement(FontAwesomeIcon, { icon: definition })

const menu1Submenu: MenuPanelItem[] = [
  { id: 'item-1', label: 'Item do Menu 1', href: '#', icon: icon(faAward) },
  { id: 'item-2', label: 'Item do Menu 2', href: '#', icon: icon(faScaleBalanced) },
  { id: 'item-3', label: 'Item do Menu 3', href: '#', icon: icon(faShieldHalved) },
  { id: 'item-4', label: 'Item do Menu 4', href: '#', icon: icon(faHeart) }
]

export const defaultMenuSections: MenuSection[] = [
  { id: 'menu-1', label: 'Agrupamento do Menu 1', icon: icon(faBell), submenu: menu1Submenu },
  { id: 'menu-2', label: 'Agrupamento do Menu 2', icon: icon(faBan) },
  { id: 'menu-3', label: 'Agrupamento do Menu 3', icon: icon(faBook) },
  { id: 'menu-4', label: 'Agrupamento do Menu 4', icon: icon(faIdBadge) }
]
