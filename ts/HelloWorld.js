var Startup = /** @class */ (function () {
    function Startup() {
    }
    Startup.main = function (texto) {
        console.log(texto);
        return texto.length;
    };
    return Startup;
}());
var hello = "Hello World";
var quantidadeCaracteres = Startup.main(hello);
try {
    //modificando conteudo da tag 'p'
    var p = document.createElement('p');
    p.textContent = hello.concat(" possui ", quantidadeCaracteres.toString(), " caracteres");
    document.body.appendChild(p);
}
catch (error) {
    console.log("Não foi executado via browser!!!");
}
//# sourceMappingURL=HelloWorld.js.map