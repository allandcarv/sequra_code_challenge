import { getInstallments } from '../../services/api/get-installments';
import { createElement } from '../../shared/utils/create-element';
import { createDropdownContainer } from './dropdown-container';
import { installmentFactory } from './utils/installment-factory';

const widgetBody = createElement('main');

getInstallments(399.99)
  .then((data) => {
    const installments = installmentFactory(data);

    const dropdownContainer = createDropdownContainer(installments);

    widgetBody.appendChild(dropdownContainer);
  })
  .catch((err) => console.error(err));

export default widgetBody;
