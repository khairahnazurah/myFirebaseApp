import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { LoginPage } from '../pages/login/login';



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import * as firebase from 'firebase';
import { FirebaseProvider } from '../providers/firebase/firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBr5kR0bQpa4b6BcZkTUEO_FKdvQuUDxvo",
  authDomain: "myclassproject6-9c056.firebaseapp.com",
  databaseURL: "https://myclassproject6-9c056.firebaseio.com",
  projectId: "myclassproject6-9c056",
  storageBucket: "myclassproject6-9c056.appspot.com",
  messagingSenderId: "189665712823"
};
firebase.initializeApp(config);


@NgModule({
  declarations: [
    MyApp,
    HomePage, LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider
  ]
})
export class AppModule {}
