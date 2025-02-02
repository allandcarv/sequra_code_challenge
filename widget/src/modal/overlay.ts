import { hideModal } from './utils/hide-modal';

const modalOverlay = document.createElement('div');
modalOverlay.classList.add('modal__overlay');
modalOverlay.onclick = hideModal;

export default modalOverlay;
