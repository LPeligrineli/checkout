import z from 'zod';
import { isCreditCardValid } from '@/utils/isCreditCardValid';
import { isExpirationDateValid } from '@/utils/isCreditCardExpirate';

export const CreditCardSchema = z.object({
    cardNumber: z.string().min(19, {message: 'Número do cartão é obrigatorio'}).refine((value) => isCreditCardValid(value.replace(/\s/g, '').trim()), {
        message: 'Número de cartão inválido',
    }),
    name: z.string().min(3, { message: 'Insira seu nome completo' }).refine((value) => value.split(' ').length > 1, {
        message: 'Sobrenome é obrigatorio',
    }),
    expirationDate: z.string().refine((value) => isExpirationDateValid(value), {
        message: 'Data inválida',
    }),
    cvv: z.string().min(3, { message: 'Código inválido' }),
    installment: z.number({message: 'Insira o número de parcelas'}).min(1, { message: 'Insira o número de parcelas' }),
    value: z.number(),
});