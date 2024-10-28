'use client'

import { use, useMemo, useState } from 'react';
import Typography from '@/components/ui/typography';
import { CreditCardsFlags } from '@/constants/creditCardsFlags.const';
import { verifyFlag } from '@/utils/verifyFlag';

interface CreditCardLayoutProps {
    name?: string;
    number?: string;
    expiration?: string;
    cvv?: string;
    flip: boolean;
}

const CreditCardLayout: React.FC<CreditCardLayoutProps> = ({ cvv, expiration, flip, name, number }) => {

    const getFlag = useMemo(() => verifyFlag(number), [number]);

    const layoutCard: any = useMemo(() => !getFlag ? CreditCardsFlags.default : CreditCardsFlags[getFlag], [number]);


    return (
        <div className={`card ${flip ? 'flipped' : ''}`}>
            <div className="card-front">
                <img className='max-full md:max-w-none' src={layoutCard.front} alt="Front of card" />
                <div className='absolute left-0 bottom-0 flex flex-col justify-between w-full px-6 py-14'>
                    <div className='flex flex-col'>
                        <Typography variant='h3'>{number ? number : '**** **** **** ****'}</Typography>
                    </div>
                    <div className='flex justify-between w-full mt-9'>
                        <Typography variant='h3'>{name ? name : "Nome do Titular"}</Typography>
                        <Typography variant='h3'>{expiration ? expiration : "00/00"}</Typography>
                    </div>
                </div>
            </div>
            <div className="card-back">
                <img className='max-full md:max-w-none' src={layoutCard.back} alt="Back of card" />
                <div className='absolute right-14 top-1/2 -translate-y-1/2 flex flex-col justify-between w-full p-6'>
                    <div className='flex justify-end'>
                        <Typography color='text-black' variant='h3'>{cvv ? cvv : '***'}</Typography>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default CreditCardLayout;



