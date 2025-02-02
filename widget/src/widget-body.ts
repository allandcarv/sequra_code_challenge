const widgetBody = document.createElement('main');
widgetBody.classList.add('widget__body');

widgetBody.innerHTML = `
<div class="widget__select" role="select">
  <button class="custom-dropdown-button" data-selected="3 cuotas de 53,00 €/mes">3 cuotas de 53,00 €/mes</button>
  <ul class="select__content">
    <li data-option="6 cuotas de 28,00 €/mes">6 cuotas de 28,00 €/mes</li>
    <li data-option="12 cuotas de 15,50 €/mes">12 cuotas de 15,50 €/mes</li>
  </ul>
</div>
`;

export default widgetBody;
