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