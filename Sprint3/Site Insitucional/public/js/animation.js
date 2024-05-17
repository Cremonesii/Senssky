const sidebar = document.querySelector(".sidebar"); // Esta linha referência para a div que possui a classe "sidebar"
const sidebarClose = document.querySelector("#sidebar-close"); // Esta linha que possui o id "sidebar-close"

sidebarClose.addEventListener("click", () => sidebar.classList.toggle("close"));// Esta para o clique no elemento referenciado por sidebarClose, ou seja, é uma animação do JS