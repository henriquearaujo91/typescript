function printName(pessoa) {
    console.log(pessoa.nome);
}
var pessoa = { nome: "Henrique" };
var empregado = { nome: "Pedro", salario: 3500 };
printName(pessoa);
printName(empregado);
printName({ nome: "Fernando" });
var empregado2 = { nome: "João", idade: 27, salario: 2500 };
console.log(empregado2);
function detalhesVeicuo(carro) {
    console.log(("Modelo do carro: " + carro.modelo + "\nAno de Fabrica\u00E7\u00E3o: " + carro.anoFabricacao).concat(carro.licenciado ? ("\nVeiculo licenciado") : "\nVeiculo não licenciado"));
}
detalhesVeicuo({ modelo: "Ferrari", anoFabricacao: 2019 });
detalhesVeicuo({ modelo: "BMW", anoFabricacao: 2018, licenciado: true });
var ConsultaMedica = /** @class */ (function () {
    function ConsultaMedica() {
        this.dataAgendamento = new Date();
    }
    ConsultaMedica.prototype.setDataAgendamento = function (d) {
        this.dataAgendamento = d;
    };
    return ConsultaMedica;
}());
var consultaMedica = new ConsultaMedica;
console.log(consultaMedica.dataAgendamento);
consultaMedica.setDataAgendamento(new Date);
console.log(consultaMedica.dataAgendamento);
//# sourceMappingURL=interfaces.js.map