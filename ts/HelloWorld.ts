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