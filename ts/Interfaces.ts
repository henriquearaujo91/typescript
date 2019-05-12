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

interface ICarro {
    modelo: string;
    anoFabricacao: number;
    licenciado?: boolean;
}
function detalhesVeicuo(carro: ICarro): void {
    console.log(`Modelo do carro: ${carro.modelo}
Ano de Fabricação: ${carro.anoFabricacao}`.concat(
        carro.licenciado ? ("\nVeiculo licenciado") : "\nVeiculo não licenciado"))
}
detalhesVeicuo({ modelo: "Ferrari", anoFabricacao: 2019 });
detalhesVeicuo({ modelo: "BMW", anoFabricacao: 2018, licenciado: true });