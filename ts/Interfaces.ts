function printName(pessoa: Pessoa) {
    console.log(pessoa.nome);
}
interface Pessoa {
    nome: string;
    readonly idade?: number; //define um atributo inalteravel
}

interface Empregado extends Pessoa {
    salario: number;
}

let pessoa: Pessoa = { nome: "Henrique" };
let empregado: Empregado = { nome: "Pedro", salario: 3500 };

printName(pessoa);
printName(empregado);
printName({ nome: "Fernando" } as Empregado);

let empregado2: Empregado = { nome: "João", idade: 27, salario: 2500 };
console.log(empregado2);