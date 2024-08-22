  // Carrega o conteúdo do menu.html e insere na div com id "menu-placeholder"
  fetch('menu.html')
  .then(response => response.text())
  .then(data => {
      document.getElementById('menu-placeholder').innerHTML = data;
  });