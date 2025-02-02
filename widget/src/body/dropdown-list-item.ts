import { createElement } from '../shared/utils/create-element';
import { DROPDOWN_LIST_ITEM_DATA_OPTION_ATTR } from './shared/constants';
import { onSelectListItem } from './utils/on-select-list-item';

export function createDropdownListItem(value: string, dataIndex: number) {
  const listItem = createElement('li');
  listItem.setAttribute(
    DROPDOWN_LIST_ITEM_DATA_OPTION_ATTR,
    dataIndex.toString()
  );
  listItem.innerText = value;
  listItem.onclick = () => onSelectListItem(dataIndex.toString(), value);

  return listItem;
}
