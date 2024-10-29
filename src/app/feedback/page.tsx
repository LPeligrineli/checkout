'use client'
import { Card, CardContent } from "@/components/ui/card"
import Typography from "@/components/ui/typography"
import { FaCheckCircle } from "react-icons/fa"
import { useCreditCardContext } from "@/context/payment"
import { mask } from "@/utils/mask"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

const Feedback = () => {

    const { creditCardData } = useCreditCardContext();
    const router = useRouter();

    if(creditCardData.cardNumber === '') {
        router.push('/')
    }

    return (
        <section className="h-dvh flex justify-center items-center ">
            <Card className="w-4/12">
                <div className="relative bg-green-dark text-center w-full p-6">
                    <Typography variant="h1">Pagamento realizado com sucesso</Typography>
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                        <FaCheckCircle size={24} color="var(--green-light)" className="text-white" />
                    </div>
                </div>
                <CardContent>
                    <div className="mt-6">
                        <div className="flex justify-between">
                            <Typography variant="h5" className="text-green">Cartão:</Typography>
                            <Typography variant="h5" className="text-green">{mask.hideCardNumber(creditCardData.cardNumber)}</Typography>
                        </div>
                        <div className="flex justify-between">
                            <Typography variant="h5" className="text-green">Nome:</Typography>
                            <Typography variant="h5" className="text-green">{creditCardData.name}</Typography>
                        </div>
                        <div className="flex justify-between">
                            <Typography variant="h5" className="text-green">Validade:</Typography>
                            <Typography variant="h5" className="text-green">{creditCardData.expirationDate}</Typography>
                        </div>
                        <Button onClick={() => {router.back()}} variant="primary" size="lg" className="mt-6">Voltar</Button>

                    </div>
                </CardContent>
            </Card>
        </section>
    )
}

export default Feedback