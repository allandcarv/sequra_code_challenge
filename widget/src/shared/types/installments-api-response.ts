import type { InstallmentValue } from './installment-value';

export interface InstallmentsAPIResponse {
  instalment_count: number;
  apr: InstallmentValue;
  total_with_tax: InstallmentValue;
  cost_of_credit: InstallmentValue;
  cost_of_credit_pct: InstallmentValue;
  grand_total: InstallmentValue;
  max_financed_amount: InstallmentValue;
  instalment_amount: InstallmentValue;
  instalment_fee: InstallmentValue;
  instalment_total: InstallmentValue;
}
