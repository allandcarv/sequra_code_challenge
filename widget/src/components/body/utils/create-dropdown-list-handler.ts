import type { StoredInstallments } from '../../../shared/store/installment-store';
import installmentStore from '../../../shared/store/installment-store';
import { createDropdownListItem } from '../dropdown-list-item';
import { onSelectListItem } from './on-select-list-item';
import { updateDropdownListHandler } from './update-dropdown-list-handler';

export function createDropdownListHandler(listElement: HTMLUListElement) {
  function handler({ installments }: StoredInstallments) {
    if (installments) {
      installments.forEach((installment) => {
        const dropdownListItem = createDropdownListItem(
          installment,
          onSelectListItem
        );

        listElement.appendChild(dropdownListItem);
      });

      installmentStore.subscribe(updateDropdownListHandler(listElement));
      installmentStore.unsubscribe(handler);
    }
  }

  return handler;
}
