export const isExpirationDateValid = (data: string): boolean => {
    const [month, year] = data.split('/').map((value) => parseInt(value));
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth() + 1; 
    if (year > currentYear || (year === currentYear && month >= currentMonth)) {
      return true;
    }
    return false;
  };
