import './style.css';

import { widgetHeader } from './components/header';
import widgetBody from './components/body';
import { createModal } from './components/modal';

export function createWidget(container: Element) {
  const widget = document.createElement('div');
  widget.classList.add('widget__container');

  widget.appendChild(widgetHeader);
  widget.appendChild(widgetBody);

  container.appendChild(widget);

  createModal();
}
