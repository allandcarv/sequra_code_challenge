import { postEvent } from '../../../services/api/post-event';
import type { Installment } from '../../../shared/types/installment';
import { EVENT_TYPES } from '../shared/constants';
import { updateDropdownButton } from './update-dropdown-button';
import { updateDropdownList } from './update-dropdown-list';

export function onSelectListItem(installments: Installment[]) {
  return function (value: Installment['value']) {
    postEvent(EVENT_TYPES.SimulatorInstalmentChanged, value);

    const selectedInstallment = installments.find(
      (installment) => installment.value === value
    );

    if (selectedInstallment) {
      updateDropdownButton(selectedInstallment);
      updateDropdownList(installments, selectedInstallment);
    }
  };
}
