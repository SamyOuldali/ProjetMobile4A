import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Intro } from "../pages/intro/intro";
import { SampleModal } from "../pages/sample-modal/sample-modal";
import { FIREBASE_CONFIG } from './firebase.credentials';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { ShoppingListService } from '../services/shopping-list/shopping-list.servive';
import { ToastService } from '../services/toast/toast.service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Intro,
    SampleModal
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Intro,
    SampleModal
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ShoppingListService,
    ToastService
  ]
})
export class AppModule {}
