import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
