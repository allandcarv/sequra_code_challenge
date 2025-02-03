import { postEvent } from '../../../services/api/post-event';
import type { InstallmentValue } from '../../../shared/types/installment-value';
import { createDropdownListItem } from '../dropdown-list-item';
import {
  DROPDOWN_BUTTON_CLASS,
  DROPDOWN_BUTTON_SELECTED_ATTR,
  DROPDOWN_LIST_CLASS,
  DROPDOWN_LIST_ITEM_DATA_OPTION_ATTR,
  EVENT_TYPES,
} from '../shared/constants';

export function onSelectListItem(value: number, string: string) {
  postEvent(EVENT_TYPES.SimulatorInstalmentChanged, value);

  const stringifiedValue = value.toString();

  const dropdownButton = document.querySelector<HTMLButtonElement>(
    `.${DROPDOWN_BUTTON_CLASS}`
  );
  const prevSelectedValue =
    dropdownButton?.getAttribute(DROPDOWN_BUTTON_SELECTED_ATTR) ?? '';
  const prevSelectedString = dropdownButton?.innerText ?? '';

  if (dropdownButton) {
    dropdownButton.setAttribute(
      DROPDOWN_BUTTON_SELECTED_ATTR,
      stringifiedValue
    );
    dropdownButton.innerText = string;
  }

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
      .filter((item) => item.value !== value)
      .sort((a, b) => a.value - b.value);

    newItemsList.forEach((item) => {
      const newItemList = createDropdownListItem(item.string, item.value);

      dropdownList.appendChild(newItemList);
    });
  }
}
