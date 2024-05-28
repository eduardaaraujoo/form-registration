// class ValidaFormulario {
//     constructor(){
//         this.formulario = document.querySelector('.formulario');
//         this.eventos();
//     }

//     eventos() {
//         this.formulario.addEventListener('submit', e => {
//             this.handleSubmit(e);
//         });
//     }

//     handleSubmit(e) {
//         e.preventDefault(); //p/ nao enviar o formulário
//         const camposValidos = this.camposValidos();
//     }

//     camposValidos() {
//         let valid = true;

//         for(let errorText of this.formulario.querySelectorAll('.error-text')){
//             errorText.remove();
//         }

//         for(let campo of this.formulario.querySelectorAll('.validar')){
//             const label = campo.previousElementSibling.innerText;

//             if(!campo.value){
//                 this.criaErro(campo, `Campo "${label}" não pode estar em branco.`);
//                 valid = false; 
//             }
//         }

//     }

//     criaErro(campo, msg) {
//         const div = document.createElement('div');
//         div.innerHTML = msg;
//         div.classList.add('error-text');
//         campo.insertAdjacentElement('afterend', div);

//     }
// }

// const valida = new ValidaFormulario();

class ValidaFormulario {
    constructor(){
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault(); //p/ nao enviar o formulário
        const camposValidos = this.camposValidos();
        if (camposValidos) {
            // Aqui você pode adicionar o código para enviar o formulário se todos os campos forem válidos
            console.log('Formulário enviado');
        }
    }

    camposValidos() {
        let valid = true;

        // Remover mensagens de erro anteriores
        for(let errorText of this.formulario.querySelectorAll('.error-text')){
            errorText.remove();
        }

        // Validar campos
        for(let campo of this.formulario.querySelectorAll('.validar')){
            const label = campo.previousElementSibling.innerText;

            if(!campo.value){
                this.criaErro(campo, `Campo "${label}" não pode estar em branco.`);
                valid = false; 
            }
        }

        return valid;
    }

    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }
}

const valida = new ValidaFormulario();
