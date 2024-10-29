import { CreditCardFormData } from "@/types/creditCard.type";
import { AES } from 'crypto-js';


export const paymentModel = (data: CreditCardFormData) => {
    return {
        cardNumber: AES.encrypt(data.cardNumber.replace(/\s/g, '').trim(), `${process.env.NEXT_PUBLIC_ENCRYPTION_KEY}`).toString(),
        expirationDate: AES.encrypt(data.expirationDate, `${process.env.NEXT_PUBLIC_ENCRYPTION_KEY}`).toString(),
        cvv: AES.encrypt(data.cvv, `${process.env.NEXT_PUBLIC_ENCRYPTION_KEY}`).toString(),
        name: AES.encrypt(data.name, `${process.env.NEXT_PUBLIC_ENCRYPTION_KEY}`).toString(),
        installment: AES.encrypt(data.installment.toString(), `${process.env.NEXT_PUBLIC_ENCRYPTION_KEY}`).toString(),              
        value: AES.encrypt(data.value.toString(), `${process.env.NEXT_PUBLIC_ENCRYPTION_KEY}`).toString(),
    }
}