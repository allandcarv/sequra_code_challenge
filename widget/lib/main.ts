import { createWidget } from '../src/widget';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('#widget_container');

  if (container) {
    createWidget(container);
  } else {
    console.error(
      'Widget container not found, please add a container with widget_container id'
    );
  }
});
