class Startup {
    public static main(texto: string): number {
        console.log(texto);
        return texto.length;
    }
}

var hello: string = "Hello World";
var quantidadeCaracteres: number = Startup.main(hello);

try {
    //modificando conteudo da tag 'p'
    var p = document.createElement('p');
    p.textContent = hello.concat(" possui ", quantidadeCaracteres.toString(), " caracteres");
    document.body.appendChild(p);
} catch (error) {
    console.log("Não foi executado via browser!!!");
}

//tipos
let num: number = 10;
let text: string = "Henrique Valença";
let bool: boolean = true;

if (bool != undefined || bool != null) {
    console.log(text.replace('e', num.toString()));
}

text.split(" ").forEach(element => {
    console.log(element.toLocaleUpperCase());
    console.log(element.charAt(1));
    console.log(element.indexOf("i"));
});

let list: number[] = [1, 2, 3];
let list2: Array<number> = new Array;
list2.push(4);

let tuple: [number, string];
tuple = [list2[0], "henrique"];
console.log(tuple);

enum DayOfWeek { SEGUNDA = 1, TERCA = 2, QUARTA = 3, QUINTA = 4 }
console.log(DayOfWeek.SEGUNDA);
console.log(`${list[2]}`)

// variavel não obrigatoria numero3?
function soma(numero1: any, numero2: any, numero3?: any): any {
    if (numero3 !== undefined)
        return numero1 + numero2 + numero3;
    return numero1 + numero2;
}
console.log(soma(1, 2, 3));
console.log(soma("hen", "rique"));

//cast
let texto: string = "texto";

let stringLength: number = (<string>texto).length;
let stringToUpperCase: string = (texto as string).toUpperCase();
console.log(stringLength);
console.log(stringToUpperCase);

//Rest Parameters
let textoResposta = (nome: string, ...skills: string[]) => {
    return `${nome}
    Habilidades: ${skills.join(',')}`;
}

console.log(textoResposta(text, "Java", "SQL", "TypeScripy"));