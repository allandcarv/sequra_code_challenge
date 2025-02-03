import { createDropdownListItem } from '../dropdown-list-item';
import {
  DROPDOWN_BUTTON_CLASS,
  DROPDOWN_BUTTON_SELECTED_ATTR,
  DROPDOWN_LIST_CLASS,
  DROPDOWN_LIST_ITEM_DATA_OPTION_ATTR,
} from '../shared/constants';

export function onSelectListItem(itemId: string, itemValue: string) {
  const dropdownButton = document.querySelector<HTMLButtonElement>(
    `.${DROPDOWN_BUTTON_CLASS}`
  );
  const prevSelectedId =
    dropdownButton?.getAttribute(DROPDOWN_BUTTON_SELECTED_ATTR) ?? '';
  const prevSelectedValue = dropdownButton?.innerText ?? '';

  if (dropdownButton) {
    dropdownButton.setAttribute(DROPDOWN_BUTTON_SELECTED_ATTR, itemId);
    dropdownButton.innerText = itemValue;
  }

  const dropdownList = document.querySelector(`.${DROPDOWN_LIST_CLASS}`);
  const dropdownListItems = dropdownList?.querySelectorAll('li');

  if (dropdownList && dropdownListItems) {
    const items: { id: string; value: string }[] = [
      { id: prevSelectedId ?? '', value: prevSelectedValue ?? '' },
    ];

    dropdownListItems.forEach((item) => {
      const dataOptionAttr = item.getAttribute(
        DROPDOWN_LIST_ITEM_DATA_OPTION_ATTR
      );

      items.push({ id: dataOptionAttr ?? '', value: item.innerText });

      item.parentNode?.removeChild(item);
    });

    const newItemsList = items
      .filter((item) => item.id !== itemId)
      .sort((a, b) => +a.id - +b.id);

    newItemsList.forEach((item) => {
      const newItemList = createDropdownListItem(item.value, +item.id);

      dropdownList.appendChild(newItemList);
    });
  }
}
