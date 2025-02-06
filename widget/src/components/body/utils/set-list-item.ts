import type { Installment } from '../../../shared/types/installment';
import { DROPDOWN_LIST_ITEM_DATA_OPTION_ATTR } from '../shared/constants';
import { getInstallmentLabel } from './get-installment-label';

export function setListItem(
  listItemEl: HTMLLIElement,
  installment: Installment,
  onSelectListItem: (value: Installment['value']) => void
) {
  listItemEl.setAttribute(
    DROPDOWN_LIST_ITEM_DATA_OPTION_ATTR,
    installment.value.toString()
  );
  listItemEl.innerText = getInstallmentLabel(
    installment.value,
    installment.string
  );
  listItemEl.onclick = () => onSelectListItem(installment.value);
}
