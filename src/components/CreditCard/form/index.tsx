import React, { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { mask } from '@/utils/mask';
import { Button } from "@/components/ui/button";
import { CreditCardSchema } from "@/schemas/creditCard.schema";
import { z } from "zod";

type CredtCardFormData = z.infer<typeof CreditCardSchema>;

interface CreditCardFormProps {
    setName: (name: string) => void;
    setNumber: (number: string) => void;
    setExpiration: (expiration: string) => void;
    setCvv: (cvv: string) => void;
    flipCard: () => void;
}

const CreditCardForm: React.FC<CreditCardFormProps> = ({ flipCard, setCvv, setExpiration, setName, setNumber }) => {

    // const [installments, setInstallments] = useState([]);

    // const installmentsMemo = useMemo<any>(() => installments, [installments]);

    const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm({
        defaultValues: {
            number: '',
            name: '',
            expiration: '',
            cvv: ''
        },
        resolver: zodResolver(CreditCardSchema),
    });

    const formValues = watch();

    const onSubmit = (data: CredtCardFormData ) => {
        console.log(data);
    }

    useEffect(() => {
        setNumber(mask.maskCardNumber(formValues.number));
        setName(formValues.name);
        setExpiration(formValues.expiration);
        setCvv(formValues.cvv);

    }, [formValues, setNumber, setName, setExpiration, setCvv]);

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-x-4 gap-y-6 w-full">

                <Input
                    {...register('number')}
                    name='number'
                    label="Numero do cartão"
                    maxLength={19}
                    onChange={(e) => setValue('number', mask.maskCardNumber(e.target.value))}
                    error={errors.number?.message}
                    testid='creditCardNumber'
                />
                <Input
                    {...register('name')}
                    name='name'
                    label="Nome (igual ao cartão)"
                    onChange={(e) => setValue('name', e.target.value.toUpperCase())}
                    error={errors.name?.message}
                    testid='creditCardName'
                />
                <div className="flex w-full gap-4">
                    <Input

                        {...register('expiration')}
                        name='expirationDate'
                        label="Validade"
                        maxLength={5}
                        onChange={(e) => setValue('expiration', mask.maskCardExpiry(e.target.value))}
                        error={errors.expiration?.message}
                        testid="creditCardExpiration"
                    />
                    <Input

                        {...register('cvv')}
                        name='cvv'
                        label="CVV"
                        maxLength={4}
                        onChange={(e) => setValue('cvv', e.target.value)}
                        onFocus={flipCard}
                        onBlur={flipCard}
                        error={errors.cvv?.message}
                        testid="creditCardCVV"
                    />
                </div>
                <div className="w-4/12 self-end">
                    <Button
                        testid="submitCreditCard"
                        variant='primary'
                        size={'lg'} >
                        Continuar
                    </Button>
                </div>

            </form>
        </div>
    );
};

export default CreditCardForm;
