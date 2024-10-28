import { isExpirationDateValid } from '../utils/isCreditCardExpirate';

describe('isExpirationDateValid', () => {
    it('should return true for a valid expiration date', () => {
        const validExpirationDate = '12/2030';
        const result = isExpirationDateValid(validExpirationDate);
        expect(result).toBe(true);
    }
    );
    it('should return false for an invalid expiration date', () => {
        const invalidExpirationDate = '12/2021';
        const result = isExpirationDateValid(invalidExpirationDate);
        expect(result).toBe(false);
    }
    );

});