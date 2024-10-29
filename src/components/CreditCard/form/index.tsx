import React, { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { mask } from '@/utils/mask';
import { Button } from "@/components/ui/button";
import { CreditCardSchema } from "@/schemas/creditCard.schema";
import { z } from "zod";
import { paymentService } from "@/services/payment";
import { paymentModel } from "../payment.model";
import { useRouter } from "next/navigation";
import { useCreditCardContext } from "@/context/payment";


type CreditCardFormData = z.infer<typeof CreditCardSchema>;

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
    const { setCreditCardData} = useCreditCardContext();
    const router = useRouter();

    const { register, handleSubmit, watch, setValue, reset, formState: { errors } } = useForm({
        defaultValues: {
            cardNumber: '',
            name: '',
            expirationDate: '',
            cvv: '',
        },
        resolver: zodResolver(CreditCardSchema),
    });

    const clearForm = () => {
        reset({
            cardNumber: '',
            name: '',
            expirationDate: '',
            cvv: '',
        });
    }

    const formValues = watch();

    const onSubmit = async (data: CreditCardFormData ) => {
        paymentService.sendPayment(paymentModel(data))
        .then(() => {
            setCreditCardData(data);
            clearForm();
            router.push('/feedback');
        }
        )
        .catch((error) => {
            console.error('Erro ao realizar pagamento:', error);
        });    
    }

    useEffect(() => {
        setNumber(mask.maskCardNumber(formValues.cardNumber));
        setName(formValues.name);
        setExpiration(formValues.expirationDate);
        setCvv(formValues.cvv);

    }, [formValues, setNumber, setName, setExpiration, setCvv]);

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-x-4 gap-y-6 w-full">

                <Input
                    {...register('cardNumber')}
                    name='cardNumber'
                    label="Numero do cartão"
                    maxLength={19}
                    onChange={(e) => setValue('cardNumber', mask.maskCardNumber(e.target.value))}
                    error={errors.cardNumber?.message}
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

                        {...register('expirationDate')}
                        name='expirationDate'
                        label="Validade"
                        maxLength={5}
                        onChange={(e) => setValue('expirationDate', mask.maskCardExpiry(e.target.value))}
                        error={errors.expirationDate?.message}
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
