import { createElement } from '../../shared/utils/create-element';
import { hideModal } from './utils/hide-modal';

const modalOverlay = createElement('div');
modalOverlay.classList.add('modal__overlay');
modalOverlay.onclick = hideModal;

export default modalOverlay;
