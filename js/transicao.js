window.addEventListener('load', function() {
    var elemento = document.querySelector('.transicao');

    elemento.classList.add('ativo');
    
});

window.addEventListener('beforeunload', function() {
    var elemento = document.querySelector('.transicao');

    elemento.classList.remove('ativo');
    
});