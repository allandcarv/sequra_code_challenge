import type { InstallmentValue } from '../../shared/types/installments-api-response';
import { createElement } from '../../shared/utils/create-element';
import { createDropdownListItem } from './dropdown-list-item';
import { DROPDOWN_LIST_CLASS } from './shared/constants';
import { getInstallmentLabel } from './utils/get-installment-label';

export function createDropdownList(installments: InstallmentValue[]) {
  const dropdownList = createElement('ul');
  dropdownList.classList.add(DROPDOWN_LIST_CLASS);

  installments.forEach((installment) => {
    const installmentLabel = getInstallmentLabel(
      installment.value,
      installment.string
    );

    const dropdownListItem = createDropdownListItem(
      installmentLabel,
      installment.value
    );

    dropdownList.appendChild(dropdownListItem);
  });

  return dropdownList;
}
