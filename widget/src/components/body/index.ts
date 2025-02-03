import { createElement } from '../../shared/utils/create-element';
import { createDropdownContainer } from './dropdown-container';

const DUMMY_DATA = [
  '3 cuotas de 53,00 €/mes',
  '6 cuotas de 28,00 €/mes',
  '12 cuotas de 15,50 €/mes',
];

const dropdownContainer = createDropdownContainer(DUMMY_DATA);

const widgetBody = createElement('main');
widgetBody.appendChild(dropdownContainer);

export default widgetBody;
