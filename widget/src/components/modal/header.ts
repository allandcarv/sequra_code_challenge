import { createElement } from '../../shared/utils/create-element';

const modalHeader = createElement('header');
modalHeader.classList.add('content__header');
modalHeader.innerHTML = `
<h2>seQura</h2>
<h1>Fracciona tu pago</h1>
`;

export default modalHeader;
