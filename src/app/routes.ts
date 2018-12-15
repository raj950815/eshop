import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { Error404Component } from './common';
import { ProductsResolver } from './home/products-resolver.service';
import { CreateComponent } from './product/create.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductDetailsComponent } from './product/product-details.component';
import { CartComponent } from './product/cart.component';

export const appRoutes: Routes = [
	{path: 'home', component: HomeComponent, resolve: {products: ProductsResolver}},
	{path: 'create', component: CreateComponent},
	{path: 'contact', component: ContactusComponent},
	{path: 'details/:id', component: ProductDetailsComponent},
	{path: 'cart', component: CartComponent},
	{path: '', redirectTo: '/home', pathMatch: 'full'},

	//user module & path
	{path:'user',loadChildren:'./user/user.module#UserModule'},    
	{path: '**', component: Error404Component},
	 
];
