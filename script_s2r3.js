const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
  function validarFormulario(){
      rl.question('Digite seu nome: ', function(nome) =>{
      rl.question('Digite seu email: ', funtion (email) =>{
      rl.question('Digite seu telefone:', funtion (telefone) =>{
      rl.question('Digite sua data de nascimento:', funtion (datanascimento) =>{ 
      rl.question('Digite sua senha:', funtion (senha) =>{     

       const dados = {
         nome,
         email,
         telefone,
         datanascimento,
         senha
       }


        function showError(captureRejectionSymbol,mensgaem){
             console.log('${campo} : ${mensagem}');
        }
        if (!dados.nome.trim()){
            showError('Nome', 'O nome é obrigatório');
        }

        const emailPattern = /^[a-zA-Z0-9,_-]+@[a-zA-Z0-9,-]+\;
        if(!emailPattern.test(dados.email)) {
            showError('Email', 'O email é obrigatório');
    }
        const telefonePattern = /^\(\d{2}\) \d{5}-\d{4}$/;
        if (!dados.telefone && !telefonePattern.test(dados.telefone)){
             showError('Telefone', 'telefone inválido')
        }
        
        const dataAniversario = new Dayte(dados)

      }
      )
      }  
      }
   
    }
    }
    }
}
