import { isCreditCardValid } from '@/utils/isCreditCardValid';

describe('isCreditCardValid', () => {
    it('should return true for a valid credit card number', () => {
        const validCreditCard = '5544820576278082';
        const result = isCreditCardValid(validCreditCard);
        expect(result).toBe(true);
    }
    );
    it('should return false for an invalid credit card number', () => {
        const invalidCreditCard = '5544820576278083';
        const result = isCreditCardValid(invalidCreditCard);
        expect(result).toBe(false);
    }
    );
});