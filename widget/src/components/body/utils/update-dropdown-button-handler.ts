import type { StoredInstallments } from '../../../shared/store/installment-store';
import { DROPDOWN_BUTTON_SELECTED_ATTR } from '../shared/constants';
import { getInstallmentLabel } from './get-installment-label';

export function updateDropdownButtonHandler(buttonEl: HTMLButtonElement) {
  return function ({ selectedInstallment }: StoredInstallments) {
    if (selectedInstallment) {
      buttonEl.setAttribute(
        DROPDOWN_BUTTON_SELECTED_ATTR,
        selectedInstallment.value.toString()
      );
      buttonEl.innerText = getInstallmentLabel(
        selectedInstallment.value,
        selectedInstallment.string
      );
    }
  };
}
