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
//tipos
var num = 10;
var text = "Henrique Valença";
var bool = true;
if (bool != undefined || bool != null) {
    console.log(text.replace('e', num.toString()));
}
text.split(" ").forEach(function (element) {
    console.log(element.toLocaleUpperCase());
    console.log(element.charAt(1));
    console.log(element.indexOf("i"));
});
var list = [1, 2, 3];
var list2 = new Array;
list2.push(4);
var tuple;
tuple = [list2[0], "henrique"];
console.log(tuple);
var DayOfWeek;
(function (DayOfWeek) {
    DayOfWeek[DayOfWeek["SEGUNDA"] = 1] = "SEGUNDA";
    DayOfWeek[DayOfWeek["TERCA"] = 2] = "TERCA";
    DayOfWeek[DayOfWeek["QUARTA"] = 3] = "QUARTA";
    DayOfWeek[DayOfWeek["QUINTA"] = 4] = "QUINTA";
})(DayOfWeek || (DayOfWeek = {}));
console.log(DayOfWeek.SEGUNDA);
//# sourceMappingURL=HelloWorld.js.map