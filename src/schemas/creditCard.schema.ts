import z from 'zod';
import { isCreditCardValid } from '@/utils/isCreditCardValid';
import { isExpirationDateValid } from '@/utils/isCreditCardExpirate';

export const CreditCardSchema = z.object({
    cardNumber: z.string().refine((value) => isCreditCardValid(value.replace(/\s/g, '').trim()), {
        message: 'Número de cartão inválido',
    }),
    name: z.string().min(3, { message: 'Nome do Titular é obrigatório' }).refine((value) => value.split(' ').length > 1, {
        message: 'Informe nome e sobrenome',
    }),
    expirationDate: z.string().refine((value) => isExpirationDateValid(value), {
        message: 'Data de expiração inválida',
    }),
    cvv: z.string().min(3, { message: 'CVV inválido' }),
})