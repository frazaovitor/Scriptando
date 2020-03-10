var out = '';

// Monitora links para os artigos completos
$(document).on('click', '.listagem', loadArticle);

// Carrega um artigo
function loadArticle() {

    var idartigo = $(this).attr('data-artigo');

    db.collection('artigos').doc(idartigo).get()
        .then(function(dataarticle) {

            var art = dataarticle.data();

            var dt = art.data.split(' '); // Obtém data [0] e hora [1]
            var ds = dt[0].split('-'); // Obtém ano [0], mês [1] e dia [2]
            var data = `${ds[2]}/${ds[1]}/${ds[0]} às ${dt[1]}`;

            var autor = art.autor.split(' ');

            var subtitulo = `Por ${autor[0]} em ${data}.`;

            var listartigos = `<a href="#artigos">Voltar para todos os artigos</a>`;

            $('#artTitulo').html(art.titulo);
            $('#artSubtitulo').html(subtitulo);
            $('#artConteudo').html(art.texto);
            $('#artRodape').html(listartigos);

        })
        .catch(function() {
            $('#artConteudo').html('Artigo não encontrado.');
        });

}

db.collection("artigos").where('status', '==', 'ativo').orderBy('data', 'desc').get() // Lê os dados da coleção
    .then(function(querySnapshot) { // Se conseguiu:

        querySnapshot.forEach((doc) => { // Loop para obter cada artigo

            // Obtém os dados do artigo
            var art = doc.data();

            out += `
<a href="#menu" data-artigo="${doc.id}" class="listagem">
    <img src="${art.imagem}" alt="${art.titulo}">
    <h4>${art.titulo}</h4>
    <small>${art.resumo}</small>
</a>
            `;

            // Atualiza o DOM
            $('#artConteudo').html(out);

        });

    })
    .catch(function() { // Se deu errado:

        out = `
<h3 class="center">Oooops!</h3>
<p class="center">Você precisa se logar para ver os artigos.</p>
<p class="center">
     <a href="#login" class="login"><i class="fas fa-sign-in-alt fa-fw"></i> Login / Entrar</a>
     <small class="center">Use sua conta do Google</small>
</p>
        `;

        // Atualiza o DOM
        $('#artConteudo').html(out);
    });

/*
Regras do Firestore:
Somente leitura dos artigos para usuários logados:
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /artigos/{document=**} {
      allow read: if request.auth.uid != null;
      allow write: if false;
    }
  }
}
Acesso total e público aos artigos:
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /artigos/{document=**} {
      allow read: if true;
      allow write: if true;
    }
  }
}
*/