function print1(valor: string): void {
    console.log(valor);
}
print1("Print 1");

function print2(valor: boolean = false): void {
    let texto = valor ? "Valor verdadeiro" : "Valor falso";
    console.log(texto);
}
print2();
print2(true);

//namedFunction
let somaNumeros = function (numero1: number, numero2: number): void {
    console.log(`Soma: ${numero1 + numero2}`)
}
somaNumeros(2, 3);
//ArrowFunction
let somaArrow = (numero1: number, numero2: number) => console.log(numero1 + numero2);
let somaArrow2 = (numero1: number, numero2: number) => { return numero1 + numero2 };
//ObjectArrow
let objectArrow = (nome: string, idade: number) => ({ Nome: nome, Idade: idade });

somaArrow(3,4);
console.log(somaArrow2(4,5));
console.log(objectArrow("Henrique", 27));