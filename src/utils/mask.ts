export class mask {
    public static maskCardNumber(cardNumber: string): string {
        const cleanedCardNumber = cardNumber.replace(/\s+/g, '');
        return cleanedCardNumber.replace(/(\d{4})/g, '$1 ').trim();
    }

    public static maskCardExpiry(expiry: string): string {
        const cleanedExpiry = expiry.replace(/\//g, '');
        return cleanedExpiry.replace(/(\d{2})/, '$1/').trim();
    }

    public static maskCardCvv(cvv: string): string {
        return cvv.replace(/\d/g, '*').trim();
    }
    public static hideCardNumber(cardNumber: string): string {
        const cleanedCardNumber = cardNumber.replace(/\s+/g, '');
        return `**** **** **** ${cleanedCardNumber.slice(-4)}`;
    }
}
