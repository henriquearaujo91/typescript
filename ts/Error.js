var calculaIOF = function (numero1, numero2) {
    if (numero2 === 0) {
        throw new Error("O valor a ser calculado é invalido!");
    }
    return numero1 / numero2 * 10;
};
try {
    console.log(calculaIOF(2, 0));
}
catch (error) {
    console.log(error);
}
finally {
    console.log("Fim da opera\u00E7\u00E3o!");
}
//# sourceMappingURL=Error.js.map