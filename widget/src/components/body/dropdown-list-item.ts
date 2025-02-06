import type { Installment } from '../../shared/types/installment';
import { createElement } from '../../shared/utils/create-element';
import { DROPDOWN_LIST_ITEM_DATA_OPTION_ATTR } from './shared/constants';
import { setListItem } from './utils/set-list-item';

export function createDropdownListItem(
  installment: Installment,
  onSelectListItem: (value: Installment['value']) => void
) {
  const listItem = createElement('li') as HTMLLIElement;
  setListItem(listItem, installment, onSelectListItem);

  return listItem;
}

export function updateDropdownListItem(
  listItemEl: HTMLLIElement,
  installment: Installment,
  onSelectListItem: (value: Installment['value']) => void
) {
  const listItemValue =
    listItemEl.getAttribute(DROPDOWN_LIST_ITEM_DATA_OPTION_ATTR) ?? '';

  if (+listItemValue !== installment.value) {
    setListItem(listItemEl, installment, onSelectListItem);
  }
}
