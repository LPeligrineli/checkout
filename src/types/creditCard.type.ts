import * as z from 'zod';
import { CreditCardSchema } from '@/schemas/creditCard.schema';

export type CreditCardFormData = z.infer<typeof CreditCardSchema>;