import { showModal } from './widget-modal';

const headerText = document.createElement('p');
headerText.innerHTML = '<strong>Págalo en</strong>';

const moreInfoButton = document.createElement('button');
moreInfoButton.classList.add('widget__button');
moreInfoButton.innerText = 'Más info';
moreInfoButton.onclick = showModal;

const widgetHeader = document.createElement('header');
widgetHeader.classList.add('widget__header');
widgetHeader.appendChild(headerText);
widgetHeader.appendChild(moreInfoButton);

export default widgetHeader;
