import { createElement } from '../../shared/utils/create-element';
import {
  MODAL_CONTAINER_CLASS,
  MODAL_CONTAINER_HIDDEN_CLASS,
} from './shared/constants';

const modalContainer = createElement('div');
modalContainer.classList.add(
  MODAL_CONTAINER_CLASS,
  MODAL_CONTAINER_HIDDEN_CLASS
);

export default modalContainer;
