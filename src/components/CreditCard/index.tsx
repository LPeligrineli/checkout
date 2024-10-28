'use client'

import { useMemo, useState } from 'react';
import CreditCardForm from './form';
import CreditCardLayout from './layout';
import Typography from '@/components/ui/typography';
import { CreditCardsFlags } from '@/constants/creditCardsFlags.const';
import { verifyFlag } from '@/utils/verifyFlag';


interface CreditCardProps {
    name?: string;
    number?: string;
    expiration?: string;
    cvv?: string;
}

const CreditCard: React.FC<CreditCardProps> = () => {
    const [flip, setFlip] = useState(false);
    const [number, setNumber] = useState<string>();
    const [name, setName] = useState<string>();
    const [expiration, setExpiration] = useState<string>();
    const [cvv, setCvv] = useState<string>();

    const getFlag = useMemo(() => verifyFlag(number), [number]);

    const layoutCard: any = useMemo(() => !getFlag ? CreditCardsFlags.default : CreditCardsFlags[getFlag], [number]);

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
