import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { LoginComponent } from './login/login';
import { StockItem } from './stock/stock-item/stock-item';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'stock', component: StockItem },
    { path: '**', redirectTo: '/home' },

];
