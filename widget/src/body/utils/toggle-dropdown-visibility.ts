import {
  DROPDOWN_CONTAINER_CLASS,
  DROPDOWN_CONTAINER_OPEN_CLASS,
} from '../shared/constants';
import { closeDropdown } from './close-dropdown';
import { openDropdown } from './open-dropdown';

export function toggleDropdownVisibility() {
  const dropdownContainer = document.querySelector(
    `.${DROPDOWN_CONTAINER_CLASS}`
  );

  if (dropdownContainer?.classList.contains(DROPDOWN_CONTAINER_OPEN_CLASS)) {
    closeDropdown();
  } else {
    openDropdown();
  }
}
