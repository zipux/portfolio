import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { DetailComponent }       from './app.detail';
import { HomeComponent }         from './app.home';
import { AppAbout }              from './app.about';

const appRoutes: Routes = [
  { path: 'detail/:symbol', component: DetailComponent },
  { path: 'about', component: AppAbout},
  { path: '**',     component: HomeComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
