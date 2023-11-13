window.onload = function(event) {

    document.getElementsByClassName('btn')[0].addEventListener('click', function(event) {
        const inputNome = document.getElementById('c-nome');

        if(!inputNome.value) {
            alert('Campo vazio!');
            return;
        }

        alert(`Olá ${inputNome.value}!`);
    });

};