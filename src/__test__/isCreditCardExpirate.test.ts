import { isExpirationDateValid } from '../utils/isCreditCardExpirate';

describe('isExpirationDateValid', () => {
    it('should return true for a valid expiration date', () => {
        const validExpirationDate = '12/30';
        const result = isExpirationDateValid(validExpirationDate);
        expect(result).toBe(true);
    }
    );
    it('should return false for an invalid expiration date', () => {
        const invalidExpirationDate = '12/21';
        const result = isExpirationDateValid(invalidExpirationDate);
        expect(result).toBe(false);
    }
    );

});