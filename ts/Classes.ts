class PessoaFisica {
    private _nome: string;

    constructor(nome: string) {
        this._nome = nome;
    }
    public setNome(nome: string) {
        this._nome = nome;
    }
    public getNome(): string {
        return this._nome;
    }

    toString(): void {
        console.log(`${this._nome}`);
    }
}

class Funcionario extends PessoaFisica {
    private _salario: number;
    constructor(nome: string, salario: number) {
        super(nome);
        this._salario = salario;
    }
    toString(): void {
        console.log(`${this.getNome()} ganha R$${this._salario} por mes`);
    }

    public static calculaHoraExtra(salario: number, horasTrabalhadas: number): number {
        return (salario / 220) * horasTrabalhadas;
    }
}

let pessoa1 = new PessoaFisica("Henrique");
let pessoa2 = new Funcionario("Tomas", 3500);

pessoa2.toString();
pessoa1.toString();
console.log(Funcionario.calculaHoraExtra(3500, 1));

class Produto {
    nome: string;
    preco: number;
    constructor(nome: string, preco: number) {
        this.nome = nome;
        this.preco = preco;
    }

    getDesconto(): number {
        let data: Date = new Date();
        if (data.getDay() === 1 || data.getDate() === 3)
            return this.preco * 0.02;
        return this.preco * 0.01;
    }
}

enum Cor { Vermelho, Azul, Amarelo };
class Carro extends Produto {
    cor: Cor;
    constructor(nome: string, preco: number, cor: Cor) {
        super(nome, preco);
        this.cor = cor
    }
    getDesconto(): number {
        return this.preco * 0.03;
    }
}

let notebook: Produto = new Produto("MacBook Pro", 13000);
let carro: Carro = new Carro("HB20", 30500, Cor.Vermelho);

console.log(notebook.getDesconto());
console.log(carro.getDesconto());

let pessoa3: PessoaFisica = new Funcionario("Bernardo", 3500);
pessoa3.toString();