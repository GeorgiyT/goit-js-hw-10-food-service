import MENU from '../menu.json';
import menuTemplate from '../tamplates/menuTemplate.hbs';

const listToInsert = document.querySelector('.js-menu');

const renderMenu = data => {
  const markup = menuTemplate(data);
  listToInsert.insertAdjacentHTML('beforeend', markup);
};

renderMenu(MENU);
