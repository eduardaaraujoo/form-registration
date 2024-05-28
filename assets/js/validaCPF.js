function validarCPF(cfpEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function(){
            return cfpEnviado.replace(/\D+/g, '');
        }
    });
}

validarCPF.prototype.valida = function(){
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if (this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);

    const novoCpf = cpfParcial + digito1 + digito2;
    return novoCpf === this.cpfLimpo;
}

validarCPF.prototype.criaDigito = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial);
    
    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {  //ac = acumulador
        ac += (regressivo * Number(val));
        regressivo--;
        return ac;
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? 0 : digito; //se o digito for maior que 9 retorna 0, ao contrário retorna o próprio digito
}

validarCPF.prototype.isSequencia = function(){
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
}

const cpf = new validarCPF('089.985.844-92');

if(cpf.valida()){
    console.log('Cpf válido')
}else{
    console.log('Cpf inválido')
}
