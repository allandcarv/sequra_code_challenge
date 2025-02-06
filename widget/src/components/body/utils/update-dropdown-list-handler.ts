import type { StoredInstallments } from '../../../shared/store/installment-store';
import { updateDropdownListItem } from '../dropdown-list-item';
import { onSelectListItem } from './on-select-list-item';

export function updateDropdownListHandler(listElement: HTMLUListElement) {
  return function ({ installments }: StoredInstallments) {
    if (installments) {
      const dropdownListItems = listElement.querySelectorAll('li');

      dropdownListItems.forEach((dropdownListItem, index) => {
        const installment = installments[index];

        updateDropdownListItem(dropdownListItem, installment, onSelectListItem);
      });
    }
  };
}
