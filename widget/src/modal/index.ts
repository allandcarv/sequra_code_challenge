import modalContainer from './container';
import modalContent from './content';
import modalOverlay from './overlay';

export default function createModal() {
  modalContainer.appendChild(modalOverlay);
  modalContainer.appendChild(modalContent);

  document.querySelector('body')?.appendChild(modalContainer);
}
