/*************************************/
/* Roteamento de links usando jQuery */
/*************************************/

// Inicializa o App
$(document).ready(runRoutes);

// Executa as rotas
function runRoutes() {

    // Carrega a página inicial
    $.get('pages/home.html', '', function(data) {
        $('#main').html(data);
    });

    // Monitora todos os links
    $(document).on('click', 'a', routing);

}

// Roteamento
function routing(e) {

    // Evita a ação normal do link no HTML
    e.preventDefault();

    // Obtém o link da tag <a> clicada
    var href = $(this).attr('href');

    // Se clicou no botão do menu, não faz nada
    if (href == '#menu' || href == '#user') return false;
    

    // Se clicou em uma rota (inicia com '#')
    if (href.substr(0, 1) == '#') {

        // Remove o '#' do início do link
        var pg = href.substr(1);

        // Documento a ser carregado
        var doc = 'pages/' + pg + '.html';

        // Carrega o documento
        $.get(doc, '', function(data) {

            // Grava o documento na tag <main>
            $('#main').html(data);

            // Oculta o menu
            hideMenu();

        });

    } else {

        // Executar o link em nova aba-janela
        window.open(href);

    }

}