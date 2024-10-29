import { api } from './api';
import { EncryptedCreditCard } from '@/types/creditCard.type';

export class paymentService {
  static async sendPayment(data: EncryptedCreditCard) {
    try {
      const response = await api.post('/payment', data);
      return response.data;
    } catch (error) {
      console.error('Erro ao realizar pagamento os pagamentos:', error);
      return [];
    }
  }
}