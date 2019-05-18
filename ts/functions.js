function print1(valor) {
    console.log(valor);
}
print1("Print 1");
function print2(valor) {
    if (valor === void 0) { valor = false; }
    var texto = valor ? "Valor verdadeiro" : "Valor falso";
    console.log(texto);
}
print2();
print2(true);
//namedFunction
var somaNumeros = function (numero1, numero2) {
    console.log("Soma: " + (numero1 + numero2));
};
somaNumeros(2, 3);
//ArrowFunction
var somaArrow = function (numero1, numero2) { return console.log(numero1 + numero2); };
var somaArrow2 = function (numero1, numero2) { return numero1 + numero2; };
//ObjectArrow
var objectArrow = function (nome, idade) { return ({ Nome: nome, Idade: idade }); };
somaArrow(3, 4);
console.log(somaArrow2(4, 5));
console.log(objectArrow("Henrique", 27));
var objeto = {
    nome: "Henrique",
    idade: 27,
    toString: function () {
        var _this = this;
        return {
            nome: "nivel2",
            toString2: function () {
                return _this;
            }
        };
    },
    toString3: function () {
        return this;
    }
};
console.log(objeto.nome);
console.log(objeto.toString());
console.log(objeto.toString().toString2());
//# sourceMappingURL=Functions.js.map