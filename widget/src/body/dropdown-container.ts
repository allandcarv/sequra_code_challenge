import { createElement } from '../shared/utils/create-element';
import { createDropdownButton } from './dropdown-button';
import { createDropdownList } from './dropdown-list';

export function createDropdownContainer(items: string[]) {
  const dropdownContainer = createElement('div');
  dropdownContainer.classList.add('widget__select');
  dropdownContainer.role = 'select';

  const dropdownButton = createDropdownButton(items[0], 0);
  dropdownContainer.appendChild(dropdownButton);

  const dropdownList = createDropdownList(items.slice(1));
  dropdownContainer.appendChild(dropdownList);

  return dropdownContainer;
}
