import installmentStore from '../../shared/store/installment-store';
import { createElement } from '../../shared/utils/create-element';
import { DROPDOWN_LIST_CLASS } from './shared/constants';
import { createDropdownListHandler } from './utils/create-dropdown-list-handler';

export function createDropdownList() {
  const dropdownList = createElement('ul');
  dropdownList.classList.add(DROPDOWN_LIST_CLASS);

  const createDropdownListObserver = createDropdownListHandler(
    dropdownList as HTMLUListElement
  );

  installmentStore.subscribe(createDropdownListObserver);

  return dropdownList;
}
