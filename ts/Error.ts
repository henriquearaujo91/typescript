let calculaIOF = (numero1: number, numero2: number) => {
    if (numero2 === 0) {
        throw new Error("O valor a ser calculado é invalido!");
    }
    return numero1 / numero2 * 10;
}

let calculaSoma = (nuemro1: number, numero2: number, ...listaNumeros: number[]) => {
    let retorno: number = 0;
    listaNumeros.forEach(numero => {
        retorno += numero;
    });
    return retorno + nuemro1 + numero2;
}

try {
    console.log(calculaIOF(2, 0));
} catch (error) {
    console.log(error);
} finally {
    console.log(calculaSoma(1,2,3,4,5,6));
    console.log(`Fim da operação!`);
}