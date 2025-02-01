import './style.css';

import widgetHeader from './widget-header';

export function createWidget(container: Element) {
  const widget = document.createElement('div');
  widget.classList.add('widget__container');

  widget.appendChild(widgetHeader);

  container.appendChild(widget);
}
