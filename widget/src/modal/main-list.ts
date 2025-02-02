const mainList = document.createElement('ul');
mainList.classList.add('content__list');

const listItems = [
  'Fracciona tu pago solo con un coste fijo por cuota.',
  'Ahora solo pagas la primera cuota.',
  'El resto de pagos se cargarán automáticamente a tu tarjeta.',
];

listItems.forEach((item) => {
  const itemText = document.createElement('p');
  itemText.innerText = item;

  const listItem = document.createElement('li');
  listItem.appendChild(itemText);

  mainList.appendChild(listItem);
});

export default mainList;
