import {
  MODAL_CONTAINER_CLASS,
  MODAL_CONTAINER_HIDDEN_CLASS,
} from './shared/constants';

const modalContainer = document.createElement('div');
modalContainer.classList.add(
  MODAL_CONTAINER_CLASS,
  MODAL_CONTAINER_HIDDEN_CLASS
);

export default modalContainer;
