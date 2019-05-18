import ValidaEmail = Validacao.ValidaEmail;

let emails = ["teste", "teste@teste", "teste@bol.com"];

emails.forEach(email => {
    console.log(`O email: ${email} ${ValidaEmail.isValido(email)}`);
});