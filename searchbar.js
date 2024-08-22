function validateSearch() {
    var searchInput = document.getElementById('searchInput').value;
    if (searchInput.trim() === "") {
        alert("Por favor, digite algo para pesquisar.");
        return false; // Impede o envio do formulário
    }
    return true; // Permite o envio do formulário
}