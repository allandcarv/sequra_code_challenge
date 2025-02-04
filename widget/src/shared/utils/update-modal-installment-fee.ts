import { MODAL_FEE_ID } from '../constants';
import type { Installment } from '../types/installment';

export function updateModalInstallmentFee(fee: Installment['fee']) {
  const installmentFeeEl = document.querySelector<HTMLSpanElement>(
    `#${MODAL_FEE_ID}`
  );

  if (installmentFeeEl) {
    installmentFeeEl.innerText = fee;
  }
}
