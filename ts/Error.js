var calculaIOF = function (numero1, numero2) {
    if (numero2 === 0) {
        throw new Error("O valor a ser calculado é invalido!");
    }
    return numero1 / numero2 * 10;
};
var calculaSoma = function (nuemro1, numero2) {
    var listaNumeros = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        listaNumeros[_i - 2] = arguments[_i];
    }
    var retorno = 0;
    listaNumeros.forEach(function (numero) {
        retorno += numero;
    });
    return retorno + nuemro1 + numero2;
};
try {
    console.log(calculaIOF(2, 0));
}
catch (error) {
    console.log(error);
}
finally {
    console.log(calculaSoma(1, 2, 3, 4, 5, 6));
    console.log("Fim da opera\u00E7\u00E3o!");
}
//# sourceMappingURL=Error.js.map