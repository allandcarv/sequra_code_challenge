import type { Installment } from '../../../shared/types/installment';
import type { InstallmentsAPIResponse } from '../../../shared/types/installments-api-response';

export function installmentFactory(
  apiResponse: InstallmentsAPIResponse[]
): Installment[] {
  return apiResponse.map((entry) => ({
    string: entry.total_with_tax.string,
    value: entry.instalment_count,
    fee: entry.instalment_fee.string,
  }));
}
