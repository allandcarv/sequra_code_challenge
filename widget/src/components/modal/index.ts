import modalContainer from './container';
import modalContent from './content';
import modalOverlay from './overlay';

export function createModal() {
  modalContainer.appendChild(modalOverlay);
  modalContainer.appendChild(modalContent);

  document.querySelector('body')?.appendChild(modalContainer);
}
