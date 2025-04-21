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




const faqs = document.querySelectorAll('#faqs');

faqs.forEach(faq => {
  const cabecalho = faq.querySelector('aside');
  const resposta = faq.querySelector('dd');
  const icone = faq.querySelector('i');

  cabecalho.addEventListener('click', () => {
    resposta.classList.toggle('hidden');
    icone.classList.toggle('fa-plus');
    icone.classList.toggle('fa-minus');
  });
});

