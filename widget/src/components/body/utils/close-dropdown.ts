import {
  DROPDOWN_CONTAINER_CLASS,
  DROPDOWN_CONTAINER_OPEN_CLASS,
} from '../shared/constants';

export function closeDropdown() {
  const dropdownContainer = document.querySelector(
    `.${DROPDOWN_CONTAINER_CLASS}`
  );

  dropdownContainer?.classList.remove(DROPDOWN_CONTAINER_OPEN_CLASS);
}
