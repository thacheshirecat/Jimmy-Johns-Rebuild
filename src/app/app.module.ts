import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { routing } from './app.routing';

import { HeaderNavigationComponent } from './header-navigation/header-navigation.component';
import { FooterNavigationComponent } from './footer-navigation/footer-navigation.component';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { SandwichTypePipe } from './sandwich-type.pipe';

export const firebaseConfig =
{
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavigationComponent,
    FooterNavigationComponent,
    SplashPageComponent,
    MenuListComponent,
    SandwichTypePipe
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
