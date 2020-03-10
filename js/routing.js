/***********************/
/* Roteamento de links */
/***********************/

// Carrega a página "home.html" na inicialização
load('pages/home.html');

// Monitora os links
linkMonitor();

// Função que monitora os links
function linkMonitor() {

    // Referência a todos os <a>...</a> do documento
    var links = document.getElementsByTagName('a');

    // Obtendo cada <a>...</a> da coleção
    for (var i = 0; i < links.length; i++) {

        // Cria o monitor deste link
        links[i].addEventListener('click', routing, false);

    }

}

// Função que prepara o link
function routing(ev) {

    // Bloqueia a ação normal do HTML
    ev.preventDefault();

    // Obtendo o "href"
    var href = this.getAttribute('href');

    // Verifica se clicou no botão do menu (#menu)
    if (href == '#menu') return false;

    // Verifica se o link.href começa com '#'
    if (href.substr(0, 1) == '#') {

        ///// Carrega a página correspondente /////

        // Remove o '#' do início do link
        var pg = href.substr(1);

        // Monta o link e carrega
        load('pages/' + pg + '.html');

        // Oculta o menu principal
        hideMenu();

        // Se o link.href não começa com '#'
    } else {

        // Executar o link em nova aba-janela
        window.open(href);

    }

}

// Carrega a página por AJAX na <main>...</main>
function load(page = 'pages/home.html') {

    // Cria o objeto HTTP Ajax
    var xhttp = new XMLHttpRequest();

    // Monitora a carga do documento solicitado
    xhttp.onreadystatechange = function() {

        // Se o documento está na memória local:
        if (this.readyState == 4 && this.status == 200) {

            // Carrega o conteúdo obtido na página
            $('main').innerHTML = this.responseText;

            // Recarrega o monitor de links para a nova página
            linkMonitor();

        }

    };

    // Solicita o documento do servidor
    xhttp.open("GET", page, true);

    // Envia a solicitação ao servidor
    xhttp.send();

}