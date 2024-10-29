export class mask {
    public static maskCardNumber(cardNumber: string): string {
        const cleanedCardNumber = cardNumber.replace(/\D/g, '');
        return cleanedCardNumber.replace(/(\d{4})/g, '$1 ').trim();
    }

    public static maskCardExpiry(expiry: string): string {
        const value = expiry.replace(/\D/g, ''); 
        const formattedValue = value.replace(/(\d{2})(\d)/, '$1/$2'); 
        return formattedValue.substring(0, 5);
    }
    public static maskCardCvv(cvv: string): string {
        return cvv.replace(/\D/g, '').trim();
    }
    public static hideCardNumber(cardNumber: string): string {
        const cleanedCardNumber = cardNumber.replace(/\s+/g, '');
        return `**** **** **** ${cleanedCardNumber.slice(-4)}`;
    }
    public static parseCurrency(value: number): string {
        return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
}
