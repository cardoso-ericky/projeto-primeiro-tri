const form = document.getElementById('site-search');
const input = document.getElementById('search-input');
const status = document.getElementById('search-status');

function setStatus(message) {
  status.textContent = message;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const query = input.value.trim();
  if (!query) {
    setStatus('Digite algo para pesquisar.');
    input.focus();
    return;
  }

  if (typeof window.find !== 'function') {
    setStatus('Seu navegador não suporta pesquisa automática na página.');
    return;
  }

  const found = window.find(query);
  setStatus(found ? `Encontrado: "${query}"` : `Nenhum resultado para "${query}".`);
});
