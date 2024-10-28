import { CreditCardsFlagsEnum } from "../enum/CreditCardFlags.enum";
export const verifyFlag = (number: string | undefined) => {
    if (number) {
        const startNumber = parseInt(number.substring(0, 2));
        if (startNumber >= 40 && startNumber <= 49) {
            return CreditCardsFlagsEnum.VISA;
        } else if (startNumber >= 51 && startNumber <= 55) {
            return CreditCardsFlagsEnum.MASTERCARD;
        } else {
            return CreditCardsFlagsEnum.DEFAULT;
        }
       
    }
}
