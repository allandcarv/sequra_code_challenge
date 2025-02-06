import { getInstallments } from '../../services/api/get-installments';
import installmentStore from '../../shared/store/installment-store';
import { createElement } from '../../shared/utils/create-element';
import { createDropdownContainer } from './dropdown-container';
import { installmentFactory } from './utils/installment-factory';

const dropdownContainer = createDropdownContainer();

const widgetBody = createElement('main');
widgetBody.appendChild(dropdownContainer);

getInstallments(399.99)
  .then((data) => {
    const installments = installmentFactory(data);

    const [firstInstallment] = installments;

    installmentStore.notify({
      installments: installments.slice(1),
      selectedInstallment: firstInstallment,
    });
  })
  .catch((err) => console.error(err));

export default widgetBody;
