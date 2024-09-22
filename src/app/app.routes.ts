import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent,
    },
    {
        path: 'inventory',
        component: InventoryComponent,
    },
    {
        path: 'product/:id',
        component: ProductDetailComponent,
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
