window.addEventListener('load', function() {
    var elemento = document.querySelector('.transicao-esquerda');

    elemento.classList.add('ativo-esquerda');
    
});

window.addEventListener('beforeunload', function() {
    var elemento = document.querySelector('.transicao-esquerda');

    elemento.classList.remove('ativo-esquerda');
    
});