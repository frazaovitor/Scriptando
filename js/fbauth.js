

//Crie uma instância do objeto provedor do Google:
var provider = new firebase.auth.GoogleAuthProvider();

//Usa o idioma do navegador
firebase.auth().useDeviceLanguage();

//variáve global com os dados do usuário

var user = {};

//Roda a aplicação ao carregar o documento
$(document).ready(authApp);

//Aplicação principal --> Observar eventos
function authApp() {

    //Observador de usuários
    firebase.auth().onAuthStateChanged(userStatus);

    //Monitora cliques no login
    $(document).on('click','.login',login);

    //Monitora cliques no logout
    $(document).on('click','.logout',logout);
}

//Altera o status do usuário
function userStatus(userData) {
    if (userData) {
        isLoged(userData);

    } else {
    
        isLogout(userData);
        
    }
}
//faz login do usuário

function login() {

    //login usando pop-up
    firebase.auth().signInWithPopup(provider);
    //opcional oculta o menu principal
    hideMenu();
}

//faz logout

function logout() {
    if(confirm("Tem certeza que deseja sair?")){
//faz logout
    firebase.auth().signOut();

    //opcional oculta o menu principal
    hideMenu();
    }
    
}

function isLoged(userData){
//fazer isso quando alguém está logado

        //Atribuir dados ao usuário
        user = userData;

        //limita o nome do usuário
        var displayName = user.displayName.substr(0, 12);
        
        //mostra a opção de logout
        var out =`
        <img src="${user.photoURL}" alt="${user.displayName}">
        <span>&nbsp;${displayName}</span>
        <a href="#user" class="logout"><i class="fas fa-fw fa-sign-out-alt"></i></a>
        `;
       
        //atualiza o DOM
        $('#usermenu').html(out); 
        
        //mostra o botão perfil
        $('#perfil').css('display','block');
}

function isLogout(){

    //fazer isso quando não tem usuário logado

        //mostra opção de login
        var out =`
        <i class="fas fa-fw fa-user-times"></i>
        <span>&nbsp;Deslogado</span>
        <a href="#user" class="login"><i class="fas fa-fw fa-sign-in-alt"></i></a>
        `;

        //atualiza o DOM
        $('#usermenu').html(out);

         //esconde o botão perfil
         $('#perfil').css('display','none');

         //carrega o documento
         $.get('pages/home.html','',function(data){

            //grava o documento na tag <main>
            $('#main').html(data);
            //oculta o menu
            hideMenu();
         });
}