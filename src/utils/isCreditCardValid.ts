export const isCreditCardValid = (numero: string): boolean => {
    let digitos = numero.toString().split('').reverse();

    let soma = 0;
    for (let i = 0; i < digitos.length; i++) {
        let digito = parseInt(digitos[i]);

        if (i % 2 !== 0) {
            digito *= 2;
            if (digito > 9) {
                digito -= 9;
            }
        }

        soma += digito;
    }

    return soma % 10 === 0;
}

