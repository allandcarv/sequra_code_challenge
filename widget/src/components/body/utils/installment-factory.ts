import type {
  InstallmentsAPIResponse,
  InstallmentValue,
} from '../../../shared/types/installments-api-response';

export function installmentFactory(
  apiResponse: InstallmentsAPIResponse[]
): InstallmentValue[] {
  return apiResponse.map((entry) => ({
    string: entry.total_with_tax.string,
    value: entry.instalment_count,
  }));
}
