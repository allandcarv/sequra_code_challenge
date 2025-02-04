import type { Installment } from '../../../shared/types/installment';
import {
  DROPDOWN_BUTTON_CLASS,
  DROPDOWN_BUTTON_SELECTED_ATTR,
} from '../shared/constants';
import { getInstallmentLabel } from './get-installment-label';

export function updateDropdownButton(selectedInstallment: Installment) {
  const dropdownButton = document.querySelector<HTMLButtonElement>(
    `.${DROPDOWN_BUTTON_CLASS}`
  );

  if (dropdownButton) {
    dropdownButton.setAttribute(
      DROPDOWN_BUTTON_SELECTED_ATTR,
      selectedInstallment.value.toString()
    );
    dropdownButton.innerText = getInstallmentLabel(
      selectedInstallment.value,
      selectedInstallment.string
    );
  }
}
