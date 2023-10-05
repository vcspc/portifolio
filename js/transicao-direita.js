window.addEventListener('load', function() {
    var elemento = document.querySelector('.transicao-direita');

    elemento.classList.add('ativo-direita');
    
});

window.addEventListener('beforeunload', function() {
    var elemento = document.querySelector('.transicao-direita');

    elemento.classList.remove('ativo-direita');
    
});