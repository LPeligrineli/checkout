import { NextResponse } from "next/server";

export async function POST(req: Request) {
    if (req.method !== 'POST') {
        return NextResponse.json({ success: false, message: 'Método não permitido.' }, { status: 405 });
    }

    try {
        const body = await req.json();

        const {
            cardNumber,
            expirationDate,
            cvv,
            name,
            installmentCount,
            installmentValue,
        } = body;

        if (!cardNumber || cardNumber.length !== 16) {
            return NextResponse.json({ success: false, message: `O número é: ${cardNumber}` }, { status: 400 });
        }

        if (!expirationDate || !/^\d{2}\/\d{2}$/.test(expirationDate)) {
            return NextResponse.json({ success: false, message: 'Data de expiração inválida.' }, { status: 400 });
        }

        if (!cvv || cvv.length < 3 || cvv.length > 4) {
            return NextResponse.json({ success: false, message: 'CVV inválido.' }, { status: 400 });
        }

        if (!name || name.length < 3) {
            return NextResponse.json({ success: false, message: 'Nome inválido.' }, { status: 400 });
        }

        if (!installmentCount || installmentCount <= 0) {
            return NextResponse.json({ success: false, message: 'Quantidade de parcelas inválida.' }, { status: 400 });
        }

        if (!installmentValue || installmentValue <= 0) {
            return NextResponse.json({ success: false, message: 'Valor da parcela inválido.' }, { status: 400 });
        }

        return NextResponse.json({ success: true, message: 'Pagamento realizado com sucesso.' });
        
    } catch (error) {
        console.error("Erro ao processar a requisição:", error);
        return NextResponse.json({ success: false, message: 'Erro ao processar a requisição.' }, { status: 400 });
    }
}
