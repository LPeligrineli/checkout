import { isCvvValid } from '@/utils/isCvvValid';

describe('isCvvValid', () => {
    it('should return true for valid cvv', () => {
        expect(isCvvValid('123', 'mastercard')).toBe(true);
        expect(isCvvValid('1234', 'visa')).toBe(true);
    });

    it('should return false for invalid cvv', () => {
        expect(isCvvValid('12', 'mastercard')).toBe(false);
        expect(isCvvValid('12345', 'visa')).toBe(false);
    });
});