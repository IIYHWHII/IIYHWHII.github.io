  // Carregar o áudio
  var audio = new Audio('sci-fi.mp3');
  var isPlaying = false;

  // Função para tocar/pausar o áudio e trocar o ícone
  function toggleAudio() {
      var icon = document.querySelector('#toggleAudio i');
      if (isPlaying) {
          audio.pause();
          icon.classList.remove('fa-pause');
          icon.classList.add('fa-play');
      } else {
          audio.play().catch(function(error) {
              console.log("Autoplay bloqueado: ", error);
          });
          icon.classList.remove('fa-play');
          icon.classList.add('fa-pause');
      }
      isPlaying = !isPlaying;
  }

  // Evento de clique no botão
  document.getElementById('toggleAudio').addEventListener('click', toggleAudio);

  // Iniciar a reprodução automaticamente ao carregar a página
  window.addEventListener('load', function() {
      audio.play().then(function() {
          isPlaying = true;
          document.querySelector('#toggleAudio i').classList.remove('fa-play');
          document.querySelector('#toggleAudio i').classList.add('fa-pause');
      }).catch(function(error) {
          console.log("Autoplay bloqueado: ", error);
      });
  });

  // Opcional: parar a reprodução ao terminar
  audio.addEventListener('ended', function() {
      isPlaying = false;
      document.querySelector('#toggleAudio i').classList.remove('fa-pause');
      document.querySelector('#toggleAudio i').classList.add('fa-play');
  });