

// Prepara a imagem
var photoURL = `<img src="${user.photoURL}" alt="${user.displayName}">`;

// Atualiza o DOM
$('#perfilImg').html(photoURL);
$('#perfilNome').html(user.displayName);
$('#perfilEmail').html(user.email);
