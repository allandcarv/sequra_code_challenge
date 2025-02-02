import './style.css';

import widgetHeader from './widget-header';
import widgetBody from './widget-body';

export function createWidget(container: Element) {
  const widget = document.createElement('div');
  widget.classList.add('widget__container');

  widget.appendChild(widgetHeader);
  widget.appendChild(widgetBody);

  container.appendChild(widget);
}
