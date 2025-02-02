import moreInfoButton from './button';
import headerText from './text';

const widgetHeader = document.createElement('header');
widgetHeader.classList.add('widget__header');
widgetHeader.appendChild(headerText);
widgetHeader.appendChild(moreInfoButton);

export default widgetHeader;
