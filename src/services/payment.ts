import {  api } from './api';
import { CreditCardFormData } from '@/types/creditCard.type';

export class paymentService {
  static async sendPayment(data: CreditCardFormData) {
    try {
      const response = await api.post('/payment', data);
      return response.data;
    } catch (error) {
      console.error('Erro ao realizar pagamento os pagamentos:', error);
      return [];
    }
  }
}