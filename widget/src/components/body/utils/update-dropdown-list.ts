import type { Installment } from '../../../shared/types/installment';
import {
  DROPDOWN_LIST_CLASS,
  DROPDOWN_LIST_ITEM_DATA_OPTION_ATTR,
} from '../shared/constants';
import { getInstallmentLabel } from './get-installment-label';
import { onSelectListItem } from './on-select-list-item';

export function updateDropdownList(
  installments: Installment[],
  selectedInstallment: Installment
) {
  const dropdownList = document.querySelector(`.${DROPDOWN_LIST_CLASS}`);
  const dropdownListItems = dropdownList?.querySelectorAll('li');

  const onSelectListItemHandler = onSelectListItem(installments);

  if (dropdownListItems) {
    installments
      .filter((installment) => installment.value !== selectedInstallment.value)
      .forEach((installment, index) => {
        const listItem = dropdownListItems[index];
        const listItemDataOption =
          listItem.getAttribute(DROPDOWN_LIST_ITEM_DATA_OPTION_ATTR) ?? '';

        if (+listItemDataOption !== installment.value) {
          listItem.setAttribute(
            DROPDOWN_LIST_ITEM_DATA_OPTION_ATTR,
            installment.value.toString()
          );
          listItem.innerText = getInstallmentLabel(
            installment.value,
            installment.string
          );
          listItem.onclick = () => onSelectListItemHandler(installment.value);
        }
      });
  }
}
