import { showModal } from '../modal/utils/show-modal';

const moreInfoButton = document.createElement('button');
moreInfoButton.classList.add('widget__button');
moreInfoButton.innerText = 'Más info';
moreInfoButton.onclick = showModal;

export default moreInfoButton;
