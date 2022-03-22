let emailRegex = /^([a-zA-Z0-9.]{1,32})@([a-zA-Z0-9]{1,16})(.com)$/;
// var teste = emailRegex.test('aaaaaaaaaaaaaaaaaaaaaa@aa.com.br');

let submit = document.getElementById('button-submit')
submit.addEventListener('click', (event) => {

  event.preventDefault()

  let name = document.getElementById('name');
  let email = document.getElementById('email');
  let message = document.getElementById('message');

  if (name.value == '') {
    showMessageBallon('Erro no formulário, insira um nome');
    name.focus();
  } else if (!emailRegex.test(email.value)) {
    showMessageBallon('Erro no formulário, insira um email válido');
    email.focus();
  } else if (message.value == '') {
    showMessageBallon('Erro no formulário, insira uma mensagem');
    message.focus();
  } else {
    const [user] = email.value.split('@')
    showMessageBallon(`Formulário enviado! Obrigado, ${user}`);
  }
})

function showMessageBallon(text) {
  balloon = document.getElementById('message-balloon')
  balloon.innerHTML = `<div class="balao" id="ballon"><p>${text}</p></div>`
}