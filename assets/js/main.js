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
        const camposValida = this.camposValidos();
    }

    camposValidos() {
        let valida = true;
    }
}

const valida = new ValidaFormulario();