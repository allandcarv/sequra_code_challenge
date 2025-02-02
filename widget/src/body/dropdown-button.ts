import { createElement } from '../shared/utils/create-element';

export function createDropdownButton(value: string, dataIndex: number) {
  const button = createElement('button');
  button.classList.add('select__button');
  button.setAttribute('data-selected-option', dataIndex.toString());
  button.innerText = value;

  return button;
}
