document.addEventListener('DOMContentLoaded', () => {
   const botao = document.querySelector('.botao'); 
   const searcharea = document.querySelector('.search');
   botao.addEventListener('click', (e) => {
    if (!searcharea.classList.contains('aberto')) {
        e.preventDefault();
    }
    searcharea.classList.toggle('aberto');   
    if (input.classList.contains('aberto')) {
        input.focus();
    }
   });
});