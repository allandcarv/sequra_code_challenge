import { createElement } from '../shared/utils/create-element';
import {
  DROPDOWN_BUTTON_CLASS,
  DROPDOWN_BUTTON_SELECTED_ATTR,
} from './shared/constants';

export function createDropdownButton(value: string, dataIndex: number) {
  const button = createElement('button');
  button.classList.add(DROPDOWN_BUTTON_CLASS);
  button.setAttribute(DROPDOWN_BUTTON_SELECTED_ATTR, dataIndex.toString());
  button.innerText = value;

  return button;
}
