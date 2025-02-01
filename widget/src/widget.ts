import './style.css';

export function createWidget(container: Element) {
  const widget = document.createElement('div');
  widget.classList.add('widget__container');

  widget.innerHTML = `
    <header class="widget__header">
      <p><strong>Págalo en</strong></p>
      <button id="more-info" class="widget__button">Más info</button>
    </header>
  `;

  container.appendChild(widget);
}
