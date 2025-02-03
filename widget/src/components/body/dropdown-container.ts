import { createElement } from '../../shared/utils/create-element';
import { createDropdownButton } from './dropdown-button';
import { createDropdownList } from './dropdown-list';
import { DROPDOWN_CONTAINER_CLASS } from './shared/constants';
import { toggleDropdownVisibility } from './utils/toggle-dropdown-visibility';

export function createDropdownContainer(items: string[]) {
  const dropdownContainer = createElement('div');
  dropdownContainer.classList.add(DROPDOWN_CONTAINER_CLASS);
  dropdownContainer.role = 'select';
  dropdownContainer.onclick = toggleDropdownVisibility;

  const dropdownButton = createDropdownButton(items[0], 0);
  dropdownContainer.appendChild(dropdownButton);

  const dropdownList = createDropdownList(items);
  dropdownContainer.appendChild(dropdownList);

  return dropdownContainer;
}
