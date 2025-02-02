const footerText = document.createElement('p');
footerText.innerText =
  'Además en el importe mostrado ya se incluye la cuota única mensual de 3,00/mes, por lo que no tendrás ninguna sorpresa.';

const modalFooter = document.createElement('footer');
modalFooter.classList.add('content__footer');
modalFooter.appendChild(footerText);

export default modalFooter;
