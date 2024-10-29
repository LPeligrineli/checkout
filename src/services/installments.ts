import { Installment } from '@/types/installments.type';
import { api } from './api';

export class installmentService {
  static async getInstallments(data: Installment): Promise<Installment[]> {
    try {
      const response = await api.post('/installments', data);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar as parcelas:', error);
      return [];
    }
  }
}