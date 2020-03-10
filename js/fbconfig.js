
  
  // Configuração do Firebase para este App
  var firebaseConfig = {
    apiKey: "AIzaSyDSRIs0frr5e4EQiPR0rUBdFuVPq1gQmgg",
    authDomain: "scriptando-f6bc3.firebaseapp.com",
    databaseURL: "https://scriptando-f6bc3.firebaseio.com",
    projectId: "scriptando-f6bc3",
    storageBucket: "scriptando-f6bc3.appspot.com",
    messagingSenderId: "326386413072",
    appId: "1:326386413072:web:2d292d3579cc3f8c226495"
  };
  // inicializa o Firebase
  firebase.initializeApp(firebaseConfig);

// inicializa o Firestore
  var db = firebase.firestore();