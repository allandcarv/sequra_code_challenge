import { postEvent } from '../../../services/api/post-event';
import installmentStore from '../../../shared/store/installment-store';
import type { Installment } from '../../../shared/types/installment';
import { EVENT_TYPES } from '../shared/constants';

let storedInstallments: Installment[];
installmentStore.subscribe(({ installments, selectedInstallment }) => {
  if (installments && selectedInstallment) {
    storedInstallments = [...installments, selectedInstallment].sort(
      (instA, instB) => instA.value - instB.value
    );
  }
});

export function onSelectListItem(value: Installment['value']) {
  postEvent(EVENT_TYPES.SimulatorInstalmentChanged, value);

  const selectedInstallment = storedInstallments.find(
    (installment) => installment.value === value
  );

  if (selectedInstallment) {
    const filteredInstallments = storedInstallments.filter(
      (installment) => installment.value !== value
    );

    installmentStore.notify({
      installments: filteredInstallments,
      selectedInstallment,
    });
  }
}
