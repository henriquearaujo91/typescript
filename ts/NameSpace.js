var Validacao;
(function (Validacao) {
    var emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var ValidaEmail = /** @class */ (function () {
        function ValidaEmail() {
        }
        ValidaEmail.isValido = function (email) {
            return emailRegex.test(email) ? "é valido" : "não é valido";
        };
        return ValidaEmail;
    }());
    Validacao.ValidaEmail = ValidaEmail;
})(Validacao || (Validacao = {}));
//# sourceMappingURL=NameSpace.js.map