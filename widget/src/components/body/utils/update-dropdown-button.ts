import {
  DROPDOWN_BUTTON_CLASS,
  DROPDOWN_BUTTON_SELECTED_ATTR,
} from '../shared/constants';

export function updateDropdownButton(value: string, string: string) {
  const dropdownButton = document.querySelector<HTMLButtonElement>(
    `.${DROPDOWN_BUTTON_CLASS}`
  );
  const prevSelectedValue =
    dropdownButton?.getAttribute(DROPDOWN_BUTTON_SELECTED_ATTR) ?? '';
  const prevSelectedString = dropdownButton?.innerText ?? '';

  if (dropdownButton) {
    dropdownButton.setAttribute(DROPDOWN_BUTTON_SELECTED_ATTR, value);
    dropdownButton.innerText = string;
  }

  return { prevSelectedString, prevSelectedValue };
}
