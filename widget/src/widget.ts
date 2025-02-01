import './style.css';

export function createWidget(container: Element) {
  const header = document.createElement('h1');
  header.innerHTML = 'Hello World';

  const widget = document.createElement('div');
  widget.appendChild(header);

  container.appendChild(widget);
}
