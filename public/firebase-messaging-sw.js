
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);



const firebaseConfig = {
    apiKey: "AIzaSyDPiU2y-AIPy5Abkb2_UkPOR1erOHU2LUs",
    authDomain: "krishi-b3b0e.firebaseapp.com",
    projectId: "krishi-b3b0e",
    storageBucket: "krishi-b3b0e.appspot.com",
    messagingSenderId: "721259592407",
    appId: "1:721259592407:web:1846672acfa70765ed0e92",
    measurementId: "G-P1GF5NMGG2"
  };

  firebase.initializeApp(firebaseConfig);
  const messsaging = firebase.messaging();

  messsaging.onBackgroundMessage((payload)=>{
    console.log("[firebase-mesaging-sw.js] Received background message",payload);

    const notificationTitle =payload.notification.title;
    const notificationOptions ={
        body: payload.notification.body,
        icon : payload.notification.icon,
    };

    self.ServiceWorkerRegistration.showNotification( notificationTitle,notificationOptions);
  });