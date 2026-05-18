document.addEventListener("DOMContentLoaded", function() {

    const cards = document.querySelectorAll('.chamado-card');

    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('mostrar');
        }, index * 100);
    });

    const form = document.getElementById('form-chamado');
    form.addEventListener('submit', function() {
        const botao = document.querySelector('.btn-enviar');
        botao.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Processando...';
        botao.disable = true;
    });

});