import type { Installment } from '../../shared/types/installment';
import { createElement } from '../../shared/utils/create-element';
import { createDropdownListItem } from './dropdown-list-item';
import { DROPDOWN_LIST_CLASS } from './shared/constants';
import { onSelectListItem } from './utils/on-select-list-item';

export function createDropdownList(
  installments: Installment[],
  selectedInstallment: Installment
) {
  const dropdownList = createElement('ul');
  dropdownList.classList.add(DROPDOWN_LIST_CLASS);

  const onSelectListItemHandler = onSelectListItem(installments);

  installments
    .filter((installment) => installment.value !== selectedInstallment.value)
    .forEach((installment) => {
      const dropdownListItem = createDropdownListItem(
        installment,
        onSelectListItemHandler
      );

      dropdownList.appendChild(dropdownListItem);
    });

  return dropdownList;
}
