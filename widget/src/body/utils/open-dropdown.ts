import {
  DROPDOWN_CONTAINER_CLASS,
  DROPDOWN_CONTAINER_OPEN_CLASS,
} from '../shared/contants';

export function openDropdown() {
  const dropdownContainer = document.querySelector(
    `.${DROPDOWN_CONTAINER_CLASS}`
  );

  dropdownContainer?.classList.add(DROPDOWN_CONTAINER_OPEN_CLASS);
}
