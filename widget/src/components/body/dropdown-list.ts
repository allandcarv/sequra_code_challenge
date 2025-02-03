import { createElement } from '../../shared/utils/create-element';
import { createDropdownListItem } from './dropdown-list-item';
import { DROPDOWN_LIST_CLASS } from './shared/constants';

export function createDropdownList(items: string[]) {
  const dropdownList = createElement('ul');
  dropdownList.classList.add(DROPDOWN_LIST_CLASS);

  for (let i = 1; i < items.length; i++) {
    const dropdownListItem = createDropdownListItem(items[i], i);
    dropdownList.appendChild(dropdownListItem);
  }

  return dropdownList;
}
