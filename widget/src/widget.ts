import './style.css';

import { widgetHeader } from './header';
import widgetBody from './body';
import { createModal } from './modal';

export function createWidget(container: Element) {
  const widget = document.createElement('div');
  widget.classList.add('widget__container');

  widget.appendChild(widgetHeader);
  widget.appendChild(widgetBody);

  container.appendChild(widget);

  createModal();
}
