import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderNavigationComponent } from './header-navigation/header-navigation.component';
import { FooterNavigationComponent } from './footer-navigation/footer-navigation.component';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { SandwichTypePipe } from './sandwich-type.pipe';


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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
