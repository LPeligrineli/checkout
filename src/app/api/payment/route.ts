import { NextResponse } from "next/server";
import CryptoJS from 'crypto-js';

const secretKey = process.env.NEXT_PUBLIC_ENCRYPTION_KEY || 'default-secret-key';

const decryptData = (encryptedData: string): string => {
    const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
    const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
    return decryptedData;
};

export async function POST(req: Request) {
    if (req.method !== 'POST') {
        return NextResponse.json({ success: false, message: 'Método não permitido.' }, { status: 405 });
    }

    try {
        const body = await req.json();

        const decryptedCardNumber = decryptData(body.cardNumber);
        const decryptedExpirationDate = decryptData(body.expirationDate);
        const decryptedCvv = decryptData(body.cvv);
        const decryptedName = decryptData(body.name);
        const decryptedInstallmentCount = decryptData(body.installment);
        const decryptedInstallmentValue = decryptData(body.installment);

        if (!decryptedCardNumber || decryptedCardNumber.length !== 16) {
            return NextResponse.json({ success: false, message: `O número é: ${decryptedCardNumber}` }, { status: 400 });
        }

        if (!decryptedExpirationDate || !/^\d{2}\/\d{2}$/.test(decryptedExpirationDate)) {
            return NextResponse.json({ success: false, message: 'Data de expiração inválida.' }, { status: 400 });
        }

        if (!decryptedCvv || decryptedCvv.length < 3 || decryptedCvv.length > 4) {
            return NextResponse.json({ success: false, message: 'CVV inválido.' }, { status: 400 });
        }

        if (!decryptedName || decryptedName.length < 3) {
            return NextResponse.json({ success: false, message: 'Nome inválido.' }, { status: 400 });
        }

        if (!decryptedInstallmentCount || parseInt(decryptedInstallmentCount) <= 0) {
            return NextResponse.json({ success: false, message: 'Quantidade de parcelas inválida.' }, { status: 400 });
        }

        if (!decryptedInstallmentValue || parseFloat(decryptedInstallmentValue) <= 0) {
            return NextResponse.json({ success: false, message: 'Valor da parcela inválido.' }, { status: 400 });
        }

        return NextResponse.json({ success: true, message: 'Pagamento realizado com sucesso.' });

    } catch (error) {
        console.error("Erro ao processar a requisição:", error);
        return NextResponse.json({ success: false, message: 'Erro ao processar a requisição.' }, { status: 400 });
    }
}