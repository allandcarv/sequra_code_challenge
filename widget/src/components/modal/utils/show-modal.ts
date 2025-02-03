import {
  MODAL_CONTAINER_CLASS,
  MODAL_CONTAINER_HIDDEN_CLASS,
} from '../shared/constants';
import { hideModalOnEsc } from './hide-modal-on-esc';

export function showModal() {
  const modalContainer = document.querySelector(`.${MODAL_CONTAINER_CLASS}`);
  modalContainer?.classList.remove(MODAL_CONTAINER_HIDDEN_CLASS);

  document.addEventListener('keydown', hideModalOnEsc);
}
