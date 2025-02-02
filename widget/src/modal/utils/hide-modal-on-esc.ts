import { hideModal } from './hide-modal';

export function hideModalOnEsc(event: KeyboardEvent) {
  if (event.key === 'Escape' || event.key === 'Esc') {
    hideModal();
  }
}
