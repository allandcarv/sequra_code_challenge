import type { Installment } from '../../shared/types/installment';
import { createElement } from '../../shared/utils/create-element';
import { DROPDOWN_LIST_ITEM_DATA_OPTION_ATTR } from './shared/constants';
import { getInstallmentLabel } from './utils/get-installment-label';

export function createDropdownListItem(
  installment: Installment,
  onSelectListItem: (value: Installment['value']) => void
) {
  const listItem = createElement('li');
  listItem.setAttribute(
    DROPDOWN_LIST_ITEM_DATA_OPTION_ATTR,
    installment.value.toString()
  );
  listItem.innerText = getInstallmentLabel(
    installment.value,
    installment.string
  );
  listItem.onclick = () => onSelectListItem(installment.value);

  return listItem;
}
