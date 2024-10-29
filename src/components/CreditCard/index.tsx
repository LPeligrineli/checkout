'use client'

import { useMemo, useState } from 'react';
import CreditCardForm from './form';
import CreditCardLayout from './layout';
import { verifyFlag } from '@/utils/verifyFlag';
import { CreditCardsFlagsEnum } from '@/enum/CreditCardFlags.enum';


const CreditCard = () => {
    const [flip, setFlip] = useState(false);
    const [number, setNumber] = useState<string>();
    const [name, setName] = useState<string>();
    const [expiration, setExpiration] = useState<string>();
    const [cvv, setCvv] = useState<string>();

    console.log('number', number);

    const getFlag: CreditCardsFlagsEnum | undefined = useMemo(() => verifyFlag(number), [number]);

    const flipCard = (): boolean | undefined => {
        if (!getFlag || getFlag === 'default') {
            return
        } else {
            setFlip(!flip)
        }
    }
    return (
        <div className="card-container absolute w-full">
            <CreditCardLayout
                cvv={cvv}
                expiration={expiration}
                name={name}
                number={number}
                flip={flip}
            />
            <div className='w-full'>
                <CreditCardForm
                    flipCard={flipCard}
                    setName={setName}
                    setCvv={setCvv}
                    setExpiration={setExpiration}
                    setNumber={setNumber}
                />
            </div>
            
        </div>
    );
};

export default CreditCard;
