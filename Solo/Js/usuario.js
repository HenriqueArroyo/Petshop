document.querySelector('#usuario').addEventListener('click', function (event) {
    // Previne o comportamento padrão do link
    event.preventDefault();

    // Obtém a referência à div de logout
    var logoutDiv = document.querySelector('.log');

    // Alterna a visibilidade da div de logout
    if (logoutDiv.style.display === 'none') {
        logoutDiv.style.display = 'block';
    } else {
        logoutDiv.style.display = 'none';
    }
});


   // Adiciona um ouvinte de evento de clique ao ícone de usuário dentro da classe .item
   document.querySelector('.item #usuario').addEventListener('click', function (event) {
    // Previne o comportamento padrão do link
    event.preventDefault();

    // Obtém a referência à div de logout
    var logoutDiv = document.querySelector('.log');

    // Alterna a visibilidade da div de logout
    if (logoutDiv.style.display === 'block') {
        logoutDiv.style.display = 'none';
    } else {
        logoutDiv.style.display = 'block';
    }
});