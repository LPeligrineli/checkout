

export const isCvvValid = (cvv: string, flag: string): boolean => {
    
    if (flag === 'visa') {
        return cvv.length === 4;
    }
    return cvv.length === 3;
}
