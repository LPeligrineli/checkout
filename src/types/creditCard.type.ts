import * as z from 'zod';
import { CreditCardSchema } from '@/schemas/creditCard.schema';

export type CreditCardFormData = z.infer<typeof CreditCardSchema>;

export type EncryptedCreditCard = {
    cardNumber: string,
    expirationDate: string,
    cvv: string,
    name: string,
    installment: string,
    value: string,
}