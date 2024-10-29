'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CreditCardFormData } from '@/types/creditCard.type'
interface CreditCardContextProps {
    creditCardData: CreditCardFormData;
    setCreditCardData: (data: CreditCardFormData) => void;
}

const CreditCardContext = createContext<CreditCardContextProps | undefined>(undefined);

export const CreditCardProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [creditCardData, setCreditCardData] = useState<CreditCardFormData>({
        cardNumber: '',
        expirationDate: '',
        cvv: '',
        name: '',
        installment: 1,
    });

    return (
        <CreditCardContext.Provider value={{ creditCardData, setCreditCardData }}>
            {children}
        </CreditCardContext.Provider>
    );
};

export const useCreditCardContext = (): CreditCardContextProps => {
    const context = useContext(CreditCardContext);
    if (!context) {
        throw new Error('useCreditCardContext deve ser usado dentro de um CreditCardProvider');
    }
    return context;
};
