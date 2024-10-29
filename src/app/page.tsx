'use client'
import { FaChevronLeft } from 'react-icons/fa';
import Typography from '@/components/ui/typography';
import CreditCard from '@/components/CreditCard';
import Step from '@/components/Step';
import { paymentSteps } from '@/constants/paymentStpes';
import useWindowSize from '@/hooks/useWindowSize';
import { Breakpoints } from '@/enum/breakPoint.enum';
import Image from 'next/image';

export default function Home() {

  const { width } = useWindowSize();

  return (
    <main className="grid grid-rows-12 grid-cols-12 w-full h-dvh">
      <section className="col-span-12 md:col-span-3 row-span-5 md:row-span-full bg-green-light">
        <div className="container">
          <div className="flex items-center">
            <FaChevronLeft color='var(--white)' />
            <Typography variant="span" className='hidden md:inline'>
              Alterar forma de pagamento
            </Typography>
            {width < Breakpoints.MD && (
              <Step steps={paymentSteps} currentStep={0} />
            )}
          </div>
          <div className='flex items-center justify-center gap-6'>
            <Image 
              src="/icons/cartao.svg"
              alt="Cartão de crédito"
              width={40}
              height={40}
            />  
            <Typography variant="h1">
              Adicione um novo cartão de crédito
            </Typography>
          </div>
        </div>
        <CreditCard />
      </section>
      <section className="col-span-12 md:col-span-9 row-span-7 md:row-span-full bg-white flex items-start justify-end">
        <div className="container">
          {width >= Breakpoints.MD && (
            <Step steps={paymentSteps} currentStep={0} />
          )}
        </div>
      </section>
    </main>
  );
}
