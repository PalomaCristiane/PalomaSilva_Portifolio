// Abre e fecha o menu no celular
const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});

// Fecha o menu depois que o usuário clica em uma opção
const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
    });
});

// Coloca o ano atual automaticamente no rodapé
const ano = new Date().getFullYear();
document.getElementById("ano").textContent = ano;

// Mostra a data da última atualização automaticamente
const data = new Date();

const dataFormatada = data.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
});

document.getElementById("dataAtualizacao").textContent = dataFormatada;
