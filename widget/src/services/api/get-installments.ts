import type { InstallmentsAPIResponse } from '../../shared/types/installments-api-response';
import { BASE_URL } from './shared/constants';

export async function getInstallments(totalWithTax: number) {
  try {
    const response = await fetch(
      `${BASE_URL}/credit_agreements?totalWithTax=${totalWithTax}`
    );

    if (!response.ok || response.status !== 200) {
      throw new Error(response.statusText);
    }

    const installments: InstallmentsAPIResponse[] = await response.json();

    return installments;
  } catch (error) {
    throw new Error(`Error on fetching installments: ${error}`);
  }
}
