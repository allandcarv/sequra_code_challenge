import type { InstallmentValue } from './installment-value';

export interface Installment extends InstallmentValue {
  fee: string;
}
