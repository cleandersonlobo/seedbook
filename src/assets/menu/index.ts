import { PersonagenIcons } from 'assets/characters';

export const SVGIconsMenus: SVGDataIcons = {
  editora: import('assets/menu/editora.svg'),
  livraria: import('assets/menu/livraria.svg'),
  curadoria: import('assets/menu/curadoria.svg'),
  pesquisar: import('assets/menu/pesquisar.svg'),
  arvore: import('assets/menu/arvore.svg'),
  ...PersonagenIcons,
};
