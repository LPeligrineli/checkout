import { CreditCardFormData } from "@/types/creditCard.type";
import { AES } from 'crypto-js';

const mock = {
    parcelas: 10,
    valor: 50.00
}

export const paymentModel = (data: CreditCardFormData) => {
    return {
        cardNumber: AES.encrypt(data.cardNumber.replace(/\s/g, '').trim(), `${`${process.env.NEXT_PUBLIC_ENCRYPTION_KEY}`}`).toString(),
        expirationDate: AES.encrypt(data.expirationDate, `${`${process.env.NEXT_PUBLIC_ENCRYPTION_KEY}`}`).toString(),
        cvv: AES.encrypt(data.cvv, `${`${process.env.NEXT_PUBLIC_ENCRYPTION_KEY}`}`).toString(),
        name: AES.encrypt(data.name, `${`${process.env.NEXT_PUBLIC_ENCRYPTION_KEY}`}`).toString(),
        installmentCount: AES.encrypt(mock.parcelas.toString(), `${`${process.env.NEXT_PUBLIC_ENCRYPTION_KEY}`}`).toString(),              
        installmentValue: AES.encrypt(mock.valor.toString(), `${`${process.env.NEXT_PUBLIC_ENCRYPTION_KEY}`}`).toString(), 
    }

}