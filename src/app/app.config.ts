import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() =>
     initializeApp({"projectId":"entrenamiento-db3b6","appId":"1:44239608741:web:23231fa6d8f1efd5a5264c","databaseURL":"https://entrenamiento-db3b6-default-rtdb.firebaseio.com","storageBucket":"entrenamiento-db3b6.appspot.com","apiKey":"AIzaSyC9C_MbOsaQpdgIv2G8fjixItlrarQ7ezs","authDomain":"entrenamiento-db3b6.firebaseapp.com","messagingSenderId":"44239608741"})), provideDatabase(() => getDatabase()), provideFirebaseApp(() => initializeApp({"projectId":"entrenamiento-db3b6","appId":"1:44239608741:web:23231fa6d8f1efd5a5264c","databaseURL":"https://entrenamiento-db3b6-default-rtdb.firebaseio.com","storageBucket":"entrenamiento-db3b6.appspot.com","apiKey":"AIzaSyC9C_MbOsaQpdgIv2G8fjixItlrarQ7ezs","authDomain":"entrenamiento-db3b6.firebaseapp.com","messagingSenderId":"44239608741"})), provideAuth(() => getAuth()), provideFirebaseApp(() => initializeApp({"projectId":"entrenamiento-db3b6","appId":"1:44239608741:web:23231fa6d8f1efd5a5264c","databaseURL":"https://entrenamiento-db3b6-default-rtdb.firebaseio.com","storageBucket":"entrenamiento-db3b6.appspot.com","apiKey":"AIzaSyC9C_MbOsaQpdgIv2G8fjixItlrarQ7ezs","authDomain":"entrenamiento-db3b6.firebaseapp.com","messagingSenderId":"44239608741"})), provideFirestore(() => getFirestore()), provideStorage(() => getStorage())]
};
