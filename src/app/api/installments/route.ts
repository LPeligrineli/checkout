import { NextResponse } from "next/server";

type InstallmentsRequest = {
  installments: number;
  value: number;
}

type InstallmentDetail = {
  installmentNumber: number;
  installmentValue: number;
}

export async function POST(req: Request) {
  const { installments, value }: InstallmentsRequest = await req.json();

  if (!installments || !value || installments <= 0 || value <= 0) {
    return NextResponse.json(
      { error: "Parâmetros inválidos. Verifique a quantidade de parcelas e o valor." },
      { status: 400 }
    );
  }
  const data: InstallmentDetail[] = Array.from({ length: installments }, (_, i) => ({
    installmentNumber: i + 1,
    installmentValue: parseFloat((value / (i + 1) ).toFixed(2)),
  }));
  return NextResponse.json({ data });
}
