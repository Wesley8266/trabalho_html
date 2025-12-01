const botoes = document.querySelectorAll(".infor");

botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    const caracteristicas = botao.parentElement.nextElementSibling;
    caracteristicas.classList.toggle("ativo");
  });
});