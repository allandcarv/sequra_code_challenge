import { createElement } from '../shared/utils/create-element';

export function createDropdownListItem(value: string, dataIndex: number) {
  const listItem = createElement('li');
  listItem.setAttribute('data-option', dataIndex.toString());
  listItem.innerText = value;

  return listItem;
}
