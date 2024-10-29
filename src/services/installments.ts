import { api } from './api';

export class installmentService {
  static async getInstallments() {
    try {
      const response = await api.get('/installments');
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar as parcelas:', error);
      return [];
    }
  }
}