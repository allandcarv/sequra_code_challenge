import type { Installment } from '../types/installment';

export interface StoredInstallments {
  installments?: Installment[];
  selectedInstallment?: Installment;
}

export type InstallmentCb = (installments: StoredInstallments) => void;

class InstallmentStore {
  #observers = new Set<InstallmentCb>();

  static #instance: InstallmentStore;

  constructor() {
    if (InstallmentStore.#instance) {
      return InstallmentStore.#instance;
    }

    InstallmentStore.#instance = this;
  }

  subscribe(callback: InstallmentCb) {
    this.#observers.add(callback);
  }

  unsubscribe(callback: InstallmentCb) {
    this.#observers.delete(callback);
  }

  notify(installments: StoredInstallments) {
    this.#observers.forEach((observer) => observer(installments));
  }
}

const installmentStore = new InstallmentStore();
Object.freeze(installmentStore);

export default installmentStore;
