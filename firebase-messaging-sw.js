importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyC7htbWWmrxv5vgmr1rc1IEX15QA63xgHI",
    authDomain: "portfolio-d07be.firebaseapp.com",
    projectId: "portfolio-d07be",
    storageBucket: "portfolio-d07be.appspot.com",
    messagingSenderId: "132457392737",
    appId: "1:132457392737:web:53ea22804ebcd5bef0d820",
    measurementId: "G-HBQDYK6ZP2"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
