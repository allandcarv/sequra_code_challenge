import { MODAL_FEE_ID } from '../../shared/constants';
import { createElement } from '../../shared/utils/create-element';

const footerText = createElement('p');
footerText.innerHTML = `Además en el importe mostrado ya se incluye la cuota única mensual de <span id="${MODAL_FEE_ID}"></span>/mes, por lo que no tendrás ninguna sorpresa.`;

const modalFooter = createElement('footer');
modalFooter.classList.add('content__footer');
modalFooter.appendChild(footerText);

export default modalFooter;
