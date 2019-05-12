var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PessoaFisica = /** @class */ (function () {
    function PessoaFisica(nome) {
        this._nome = nome;
    }
    PessoaFisica.prototype.setNome = function (nome) {
        this._nome = nome;
    };
    PessoaFisica.prototype.getNome = function () {
        return this._nome;
    };
    PessoaFisica.prototype.toString = function () {
        console.log("" + this._nome);
    };
    return PessoaFisica;
}());
var Funcionario = /** @class */ (function (_super) {
    __extends(Funcionario, _super);
    function Funcionario(nome, salario) {
        var _this = _super.call(this, nome) || this;
        _this._salario = salario;
        return _this;
    }
    Funcionario.prototype.toString = function () {
        console.log(this.getNome() + " ganha R$" + this._salario + " por mes");
    };
    Funcionario.calculaHoraExtra = function (salario, horasTrabalhadas) {
        return (salario / 220) * horasTrabalhadas;
    };
    return Funcionario;
}(PessoaFisica));
var pessoa1 = new PessoaFisica("Henrique");
var pessoa2 = new Funcionario("Tomas", 3500);
pessoa2.toString();
pessoa1.toString();
console.log(Funcionario.calculaHoraExtra(3500, 1));
var Produto = /** @class */ (function () {
    function Produto(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    Produto.prototype.getDesconto = function () {
        var data = new Date();
        if (data.getDay() === 1 || data.getDate() === 3)
            return this.preco * 0.02;
        return this.preco * 0.01;
    };
    return Produto;
}());
var Cor;
(function (Cor) {
    Cor[Cor["Vermelho"] = 0] = "Vermelho";
    Cor[Cor["Azul"] = 1] = "Azul";
    Cor[Cor["Amarelo"] = 2] = "Amarelo";
})(Cor || (Cor = {}));
;
var Carro = /** @class */ (function (_super) {
    __extends(Carro, _super);
    function Carro(nome, preco, cor) {
        var _this = _super.call(this, nome, preco) || this;
        _this.cor = cor;
        return _this;
    }
    Carro.prototype.getDesconto = function () {
        return this.preco * 0.03;
    };
    return Carro;
}(Produto));
var notebook = new Produto("MacBook Pro", 13000);
var carro = new Carro("HB20", 30500, Cor.Vermelho);
console.log(notebook.getDesconto());
console.log(carro.getDesconto());
//# sourceMappingURL=Classes.js.map