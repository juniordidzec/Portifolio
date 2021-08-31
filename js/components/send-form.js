const btn = document.querySelector('.main-button.-full.-submit');
let inputName = document.querySelector('#input-name').value;
let inputEmail = document.querySelector('#input-email').value;
let inputMassage = document.querySelector('#input-message').value;

btn.addEventListener('click', function() {
    sendEmail(inputName, inputEmail, inputMassage);
});

function sendEmail(inputName, inputEmail, inputMassage) {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "didzecjr@gmail.com",
        Password: "oodoryxlwaczoxrj",
        To: "junior_didzec@hotmail.com",
        From: "didzecjr@gmail.com",
        Subject: `${inputName} mandou uma mensagem para você`,
        Body: `Name: ${inputName} <br/> Email: ${inputEmail} <br/> Message: ${inputMassage}`,
    }).then((inputMassage) => alert("E-mail enviado com sucesso"));

    inputName = '';
    inputEmail= '';
    inputMassage= '';
}