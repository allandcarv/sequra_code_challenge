const MODAL_CONTAINER_CLASS = 'modal__container';
const MODAL_CONTAINER_HIDDEN_CLASS = 'modal__container--hidden';

export default function createModal() {
  const modalOverlay = document.createElement('div');
  modalOverlay.classList.add('modal__overlay');
  modalOverlay.onclick = hideModal;

  const modalContent = document.createElement('div');
  modalContent.classList.add('modal__content');

  modalContent.innerHTML = `
    <header class="content__header">
      <h2>seQura</h2>
      <h1>Fracciona tu pago</h1>
    </header>
    <main>
      <ul class="content__list">
        <li>
          <p>Fracciona tu pago solo con un coste fijo por cuota.</p>
        </li>
        <li>
          <p>Ahora solo pagas la primera cuota.</p>
        </li>
        <li>
          <p>El resto de pagos se cargarán automáticamente a tu tarjeta.</p>
        </li>
      </ul>
    </main>
    <footer class="content__footer">
      <p>Además en el importe mostrado ya se incluye la cuota única mensual de 3,00/mes, 
      por lo que no tendrás ninguna sorpresa.</p>
    </footer>
  `;

  const modalContainer = document.createElement('div');
  modalContainer.classList.add(
    MODAL_CONTAINER_CLASS,
    MODAL_CONTAINER_HIDDEN_CLASS
  );
  modalContainer.appendChild(modalOverlay);
  modalContainer.appendChild(modalContent);

  document.querySelector('body')?.appendChild(modalContainer);
}

export function showModal() {
  const modalContainer = document.querySelector(`.${MODAL_CONTAINER_CLASS}`);
  modalContainer?.classList.remove(MODAL_CONTAINER_HIDDEN_CLASS);

  document.addEventListener('keydown', hideModalOnEsc);
}

export function hideModal() {
  const modalContainer = document.querySelector(`.${MODAL_CONTAINER_CLASS}`);
  modalContainer?.classList.add(MODAL_CONTAINER_HIDDEN_CLASS);

  document.removeEventListener('keydown', hideModalOnEsc);
}

export function hideModalOnEsc(event: KeyboardEvent) {
  if (event.key === 'Escape' || event.key === 'Esc') {
    hideModal();
  }
}
