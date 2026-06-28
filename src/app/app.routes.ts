import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PromocoesComponent } from './promocoes/promocoes.component';

export const routes: Routes = [
  { path: '', redirectTo: '/pricing', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'pricing', component: HomeComponent },
  // { path: 'promocoes', component: PromocoesComponent },
  { path: '**', redirectTo: '/pricing' }
];
