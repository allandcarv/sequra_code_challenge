import type { StoredInstallments } from '../../shared/store/installment-store';
import installmentStore from '../../shared/store/installment-store';
import { createElement } from '../../shared/utils/create-element';

function updateModalFeeHandler(feeEl: HTMLSpanElement) {
  return function ({ selectedInstallment }: StoredInstallments) {
    if (selectedInstallment) {
      feeEl.innerText = selectedInstallment.fee;
    }
  };
}

const footerTextBeforeFee = document.createElement('span');
footerTextBeforeFee.innerText =
  'Además en el importe mostrado ya se incluye la cuota única mensual de ';

const footerTextFee = document.createElement('span');

const footerTextAfterFee = document.createElement('span');
footerTextAfterFee.innerText = '/mes, por lo que no tendrás ninguna sorpresa.';

const footerText = createElement('p');
footerText.appendChild(footerTextBeforeFee);
footerText.appendChild(footerTextFee);
footerText.appendChild(footerTextAfterFee);

const modalFooter = createElement('footer');
modalFooter.classList.add('content__footer');
modalFooter.appendChild(footerText);

const updateModalFee = updateModalFeeHandler(footerTextFee);
installmentStore.subscribe(updateModalFee);

export default modalFooter;
