import type { Installment } from '../../shared/types/installment';
import { createElement } from '../../shared/utils/create-element';
import { updateModalInstallmentFee } from '../../shared/utils/update-modal-installment-fee';
import { createDropdownButton } from './dropdown-button';
import { createDropdownList } from './dropdown-list';
import { DROPDOWN_CONTAINER_CLASS } from './shared/constants';
import { getInstallmentLabel } from './utils/get-installment-label';
import { toggleDropdownVisibility } from './utils/toggle-dropdown-visibility';

export function createDropdownContainer(installments: Installment[]) {
  const dropdownContainer = createElement('div');
  dropdownContainer.classList.add(DROPDOWN_CONTAINER_CLASS);
  dropdownContainer.role = 'select';
  dropdownContainer.onclick = toggleDropdownVisibility;

  const [firstInstallment] = installments;
  updateModalInstallmentFee(firstInstallment.fee);

  const dropdownButton = createDropdownButton(
    getInstallmentLabel(firstInstallment.value, firstInstallment.string),
    firstInstallment.value
  );
  dropdownContainer.appendChild(dropdownButton);

  const dropdownList = createDropdownList(installments, firstInstallment);
  dropdownContainer.appendChild(dropdownList);

  return dropdownContainer;
}
