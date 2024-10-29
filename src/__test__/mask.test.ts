import { mask } from '@/utils/mask';

describe('mask', () => {
    describe('maskCardNumber', () => {
        it('should return a masked card number', () => {
            const cardNumber = '5223271981759515';
            const expected = '5223 2719 8175 9515';
            const result = mask.maskCardNumber(cardNumber);
            expect(result).toBe(expected);
        });
    });

    describe('maskCardExpiry', () => {
        it('should return a masked card expiry', () => {
            const expiry = '1223';
            const expected = '12/23';
            const result = mask.maskCardExpiry(expiry);
            expect(result).toBe(expected);
        });
    });

    describe('maskCardCvv', () => {
        it('should return a masked card cvv', () => {
            const cvv = '123';
            const expected = '***';
            const result = mask.maskCardCvv(cvv);
            expect(result).toBe(expected);
        });
    });
});