import { createElement } from '../shared/utils/create-element';
import { createDropdownListItem } from './dropdown-list-item';

export function createDropdownList(items: string[]) {
  const dropdownList = createElement('ul');
  dropdownList.classList.add('select__content');

  items.forEach((item, index) => {
    const dropdownListItem = createDropdownListItem(item, index);
    dropdownList.appendChild(dropdownListItem);
  });

  return dropdownList;
}
