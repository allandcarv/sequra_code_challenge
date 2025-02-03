import { createElement } from '../../shared/utils/create-element';
import { DROPDOWN_LIST_ITEM_DATA_OPTION_ATTR } from './shared/constants';
import { onSelectListItem } from './utils/on-select-list-item';

export function createDropdownListItem(string: string, value: number) {
  const listItem = createElement('li');
  listItem.setAttribute(DROPDOWN_LIST_ITEM_DATA_OPTION_ATTR, value.toString());
  listItem.innerText = string;
  listItem.onclick = () => onSelectListItem(value, string);

  return listItem;
}
