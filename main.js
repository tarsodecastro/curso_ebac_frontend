const form = document.getElementById('form-exercicio');
const campoA = document.getElementById('campo-a');
const campoB = document.getElementById('campo-b');
let formEValido = false;

function validaForm(a, b) {

    a = parseInt(a);
    b = parseInt(b);

    if(b > a){
        return true;
    }else{
        return false;
    }
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const mensagemSucesso = `O valor de B (<b>${campoB.value}</b>) é maior que o valor de A (<b>${campoA.value}</b>)`;

    formEValido = validaForm(campoA.value, campoB.value);

    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        campoA.value = '';
        campoB.value = '';
    } else {
        campoB.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    }

});

campoB.addEventListener('keyup', function (e) {

    document.querySelector('.success-message').style.display = 'none';

    if(this.value === ''){
        campoB.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }

    formEValido = validaForm(campoA.value, campoB.value);

    if (!formEValido){
        campoB.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    }else{
        campoB.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
});