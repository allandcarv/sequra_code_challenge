import {
  MODAL_CONTAINER_CLASS,
  MODAL_CONTAINER_HIDDEN_CLASS,
} from '../shared/constants';
import { hideModalOnEsc } from './hide-modal-on-esc';

export function hideModal() {
  const modalContainer = document.querySelector(`.${MODAL_CONTAINER_CLASS}`);
  modalContainer?.classList.add(MODAL_CONTAINER_HIDDEN_CLASS);

  document.removeEventListener('keydown', hideModalOnEsc);
}
