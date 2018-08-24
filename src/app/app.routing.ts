import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderNavigationComponent } from './header-navigation/header-navigation.component';
import { FooterNavigationComponent } from './footer-navigation/footer-navigation.component';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { MenuListComponent } from './menu-list/menu-list.component';

const appRoutes: Routes =
[
  {
    path: '',
    component: SplashPageComponent
  },
  {
    path: 'menu',
    component: MenuListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
