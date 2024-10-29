import { verifyFlag } from '@/utils/verifyFlag';

describe('verifyFlag', () => {
    it('should return visa flag when number starts with 4', () => {
        const result = verifyFlag('4000000000000');
        expect(result).toBe('visa');
    });

    it('should return master flag when number starts between 51 and 59', () => {
        const result = verifyFlag('5100000000000');
        expect(result).toBe('master');
    });

    it('should return visa flag when number starts with 3', () => {
        const result = verifyFlag('3000000000000');
        expect(result).toBe('default');
    });
});