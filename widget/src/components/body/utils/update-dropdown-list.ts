import type { InstallmentValue } from '../../../shared/types/installment-value';
import { createDropdownListItem } from '../dropdown-list-item';
import {
  DROPDOWN_LIST_CLASS,
  DROPDOWN_LIST_ITEM_DATA_OPTION_ATTR,
} from '../shared/constants';

export function updateDropdownList(
  selectedValue: number,
  prevSelectedValue: string,
  prevSelectedString: string
) {
  const dropdownList = document.querySelector(`.${DROPDOWN_LIST_CLASS}`);
  const dropdownListItems = dropdownList?.querySelectorAll('li');

  if (dropdownList && dropdownListItems) {
    const items: InstallmentValue[] = [
      { value: +prevSelectedValue, string: prevSelectedString },
    ];

    dropdownListItems.forEach((item) => {
      const dataOptionAttr =
        item.getAttribute(DROPDOWN_LIST_ITEM_DATA_OPTION_ATTR) ?? 0;

      items.push({ string: item.innerText, value: +dataOptionAttr });

      item.parentNode?.removeChild(item);
    });

    const newItemsList = items
      .filter((item) => item.value !== selectedValue)
      .sort((a, b) => a.value - b.value);

    newItemsList.forEach((item) => {
      const newItemList = createDropdownListItem(item.string, item.value);

      dropdownList.appendChild(newItemList);
    });
  }
}
