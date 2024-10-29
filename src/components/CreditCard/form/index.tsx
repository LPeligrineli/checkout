import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { mask } from '@/utils/mask';
import { Button } from "@/components/ui/button";
import { CreditCardSchema } from "@/schemas/creditCard.schema";
import { paymentService } from "@/services/payment";
import { paymentModel } from "../payment.model";
import { useRouter } from "next/navigation";
import { useCreditCardContext } from "@/context/payment";
import { installmentService } from "@/services/installments";
import { Installment, Installments } from "@/types/installments.type";
import { Select, SelectItem, SelectContent, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CreditCardFormData } from "@/types/creditCard.type";
import { mockvalue } from "./mockValues";

interface CreditCardFormProps {
    setName: (name: string) => void;
    setNumber: (number: string) => void;
    setExpiration: (expiration: string) => void;
    setCvv: (cvv: string) => void;
    flipCard: () => void;
}

const CreditCardForm: React.FC<CreditCardFormProps> = ({ flipCard, setCvv, setExpiration, setName, setNumber }) => {

    const [installments, setInstallments] = useState<Installments>();
    const { setCreditCardData } = useCreditCardContext();
    const router = useRouter();

    const { register, handleSubmit, watch, setValue, reset, formState: { errors } } = useForm<CreditCardFormData>({
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

    const handleSetSelect = (e: string) => {
        if (installments) {
            setValue('installment', parseInt(e));
            setValue('value', installments[parseInt(e) - 1].value);
        }
    }


    const formValues = watch();

    useEffect(() => {
        console.log(installments);
    }, [installments]);

    const onSubmit: SubmitHandler<CreditCardFormData> = async (data) => {

        if (!installments) return;
        const payload = {
            ...data,
            installments: installments[data.installment].installments,
            value: installments[data.installment].value
        }
        paymentService.sendPayment(paymentModel(payload))
            .then(() => {
                setCreditCardData(data);
                clearForm();
                router.push('/feedback');
            })
            .catch((error) => {
                console.error('Erro ao realizar pagamento:', error);
            });
    }

    useEffect(() => {
        installmentService.getInstallments(mockvalue)
            .then((response) => {
                setInstallments(response);
            })
    }, []);

    useEffect(() => {
        setNumber(mask.maskCardNumber(formValues.cardNumber));
        setName(formValues.name);
        setExpiration(formValues.expirationDate);
        setCvv(formValues.cvv);

    }, [formValues, setNumber, setName, setExpiration, setCvv]);

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-x-4 gap-y-4 w-full">

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
                        onChange={(e) => setValue('cvv', mask.maskCardCvv(e.target.value))}
                        onFocus={flipCard}
                        onBlur={flipCard}
                        error={errors.cvv?.message}
                        testid="creditCardCVV"
                    />
                </div>
                <div>
                    <Select
                        {...register('installment')}
                        name='installment'
                        onValueChange={(e) => handleSetSelect(e)}

                    >
                        <SelectTrigger error={errors.installment?.message}>
                            <SelectValue placeholder="Número de parcelas" />
                        </SelectTrigger>
                        <SelectContent>
                            {installments?.map((installment: Installment) => (
                                <SelectItem key={installment.installments} value={`${installment.installments}`}>
                                    {installment.installments}x de {mask.parseCurrency(installment.value)} {installment.fee ? `(com juros)` : '(sem juros)'}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                </div>
                <div className="w-6/12 md:w-3/12 self-center md:self-end">
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
