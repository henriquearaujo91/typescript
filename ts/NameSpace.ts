namespace Validacao {
    let emailRegex: RegExp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    export class ValidaEmail {
        static isValido(email: string): string {
            return emailRegex.test(email) ? "é valido" : "não é valido";
        }
    }
}