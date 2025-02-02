import modalFooter from './footer';
import modalHeader from './header';
import modalMain from './main';

const modalContent = document.createElement('div');
modalContent.classList.add('modal__content');
modalContent.appendChild(modalHeader);
modalContent.appendChild(modalMain);
modalContent.appendChild(modalFooter);

export default modalContent;
