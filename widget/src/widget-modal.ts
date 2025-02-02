export default function createModal() {
  const modalOverlay = document.createElement('div');
  modalOverlay.classList.add('modal__overlay');

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
  modalContainer.classList.add('modal__container');
  modalContainer.appendChild(modalOverlay);
  modalContainer.appendChild(modalContent);

  document.querySelector('body')?.appendChild(modalContainer);
}
