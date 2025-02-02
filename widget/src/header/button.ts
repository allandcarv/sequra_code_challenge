import { showModal } from '../modal/utils/show-modal';
import { createElement } from '../shared/utils/create-element';

const moreInfoButton = createElement('button');
moreInfoButton.classList.add('widget__button');
moreInfoButton.innerText = 'Más info';
moreInfoButton.onclick = showModal;

export default moreInfoButton;
