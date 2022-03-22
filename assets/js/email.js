let emailRegex = /^([a-zA-Z0-9.]{1,32})@([a-zA-Z0-9]{1,16})(.com)$/
var teste = emailRegex.test('aaaaaaaaaaaaaaaaaaaaaa@aa.com.br');

let submit = document.getElementById('button-submit')
submit.addEventListener('click',(event) =>{
  event.preventDefault()

  let name = document.getElementById('name');
  let email = document.getElementById('email');
  let message = document.getElementById('message');



  if(name.value == ''){
    showMessageBallon('Erro no formulário, insira um nome');
    name.focus();
  } else if (!emailRegex.test(email.value)) {
    showMessageBallon ('Erro no formulário, insira um email válido');
    email.focus();
  } else if(message.value == '') {
    showMessageBallon ('Erro no formulário, insira uma mensagem');
    message.focus()
  } else{
    const[user] = email.value.split('@')
    showMessageBallon(`Formulário enviado! Obrigado, ${user}`)
  }
})

function showMessageBallon(text){
  divError = document.getElementById('error-message')
  divError.innerHTML = `<div class="balao" id="ballon"><p>${text}</p></div>`
}

// function myFunction(){
//   let name = document.getElementById('name').value
//   let email = document.getElementById('email').value
//   let message = document.getElementById('message').value
//   const [user, domain] = email.split("@");
//   // if (name.length<30){
//   //   error(`Obrigado, ${name}.`);
//   // }else{
//   //   error(`nome comprido da desgraça`);
//   // }
//   if ((user.length >=1) &&
//     (user.length<=32)&&
//     (domain.length >=3) &&
//     (domain.length<=16)&&
//     // (user.search("@")==-1) &&
//     // (domain.search("@")==-1) &&
//     (user.search(" ")==-1) &&
//     (domain.search(" ")==-1) &&
//     (domain.search(".")!=-1) &&
//     (domain.indexOf(".") >=1)&&
//     (domain.lastIndexOf(".") < domain.length - 1)) {
// messagem('correto');
// }
// else{
// messagem('invalido');
// return false
// }
// }
  


// const = document.getElementById('ul-task')
// ul.appendChild(taskItem)

// console.log(enviar)
// enviar.addEventListener("keypress", submitForm);
// error('opa');