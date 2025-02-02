import { createElement } from '../shared/utils/create-element';

const footerText = createElement('p');
footerText.innerText =
  'Además en el importe mostrado ya se incluye la cuota única mensual de 3,00/mes, por lo que no tendrás ninguna sorpresa.';

const modalFooter = createElement('footer');
modalFooter.classList.add('content__footer');
modalFooter.appendChild(footerText);

export default modalFooter;
