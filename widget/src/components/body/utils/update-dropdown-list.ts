import type { Installment } from '../../../shared/types/installment';
import { createDropdownListItem } from '../dropdown-list-item';
import { DROPDOWN_LIST_CLASS } from '../shared/constants';
import { onSelectListItem } from './on-select-list-item';

export function updateDropdownList(
  installments: Installment[],
  selectedInstallment: Installment
) {
  const dropdownList = document.querySelector(`.${DROPDOWN_LIST_CLASS}`);
  const dropdownListItems = dropdownList?.querySelectorAll('li');

  const onSelectListItemHandler = onSelectListItem(installments);

  if (dropdownList && dropdownListItems) {
    dropdownListItems.forEach((item) => {
      item.parentNode?.removeChild(item);
    });

    installments
      .filter((installment) => installment.value !== selectedInstallment.value)
      .forEach((installment) => {
        const newItemList = createDropdownListItem(
          installment,
          onSelectListItemHandler
        );

        dropdownList.appendChild(newItemList);
      });
  }
}
