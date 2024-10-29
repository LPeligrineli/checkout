export interface StepProps {
    title: string;
    currentStep: number;
    isDone?: boolean;
}

export const paymentSteps: StepProps[] = [
    {
        title: "Carrinho",
        currentStep: 0,
        isDone: true,
    },
    {
        title: "Pagamento",
        currentStep: 1,
        isDone: false,
    },
    {
        title: "Confirmação",
        currentStep: 2,
        isDone: false,
    },
]