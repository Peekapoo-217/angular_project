import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { LoginComponent } from './login/login';
import { StockListComponent } from './stock/stock-list/stock-list';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'stocks', component: StockListComponent },
  { path: '**', redirectTo: '/stocks' },
];
