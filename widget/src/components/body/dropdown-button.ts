import installmentStore from '../../shared/store/installment-store';
import { createElement } from '../../shared/utils/create-element';
import { DROPDOWN_BUTTON_CLASS } from './shared/constants';
import { updateDropdownButtonHandler } from './utils/update-dropdown-button-handler';

export function createDropdownButton() {
  const button = createElement('button') as HTMLButtonElement;
  button.id = 'selected-option';
  button.classList.add(DROPDOWN_BUTTON_CLASS);

  const updateDropdownButton = updateDropdownButtonHandler(button);
  installmentStore.subscribe(updateDropdownButton);

  return button;
}
