const botaoBurger = document.querySelector("#burger");
const mobile = document.querySelector("#menu-mobile");

function mostrar() {
  // Só executa a função se estiver em modo mobile
  if (window.innerWidth <= 1024) {
    mobile.classList.toggle("hidden");

    const estaAberto = !mobile.classList.contains("hidden");

    botaoBurger.classList.toggle("fa-bars", !estaAberto);
    botaoBurger.classList.toggle("fa-xmark", estaAberto);
  }
}

// Adiciona o evento de clique
botaoBurger.addEventListener("click", mostrar);

// Garante que o menu esteja escondido ao redimensionar para desktop
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    mobile.classList.add("hidden");
    botaoBurger.classList.remove("fa-xmark");
    botaoBurger.classList.add("fa-bars");
  }
});

document.querySelectorAll('.faq-item').forEach(item => {
  const header = item.querySelector('aside');
  const icon = header.querySelector('i');
  const content = item.querySelector('dd');
  
  // Abre o primeiro item por padrão
  if (item === document.querySelector('.faq-item:first-child')) {
      item.classList.add('border-green-500');
      icon.classList.replace('fa-plus', 'fa-minus');
  }
  
  header.addEventListener('click', () => {
      const isOpen = icon.classList.contains('fa-minus');
      
      // Alterna estado
      icon.classList.toggle('fa-minus', !isOpen);
      icon.classList.toggle('fa-plus', isOpen);
      content.classList.toggle('hidden', isOpen);
      item.classList.toggle('border-green-500', !isOpen);
      item.classList.toggle('border-gray-300', isOpen);
  });
});