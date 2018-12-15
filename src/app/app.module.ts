import { ProductsService } from './shared/index';
import { appRoutes } from './routes';
import { ProductsResolver } from './home/products-resolver.service';

import { AppComponent } from './app.component';
import { HeaderComponent, FooterComponent, Error404Component } from './common/index';
import { HomeComponent } from './home/home.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateComponent } from './product/create.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AgmCoreModule } from '@agm/core';
import { ShowProductComponent } from './product/show-product.component';

/* NgRx */
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ProductReducer } from './state/product.reducer';
import { ProductEffects } from './state/product.effects';
import { ProductDetailsComponent } from './product/product-details.component';
import { StarRatingComponent } from './product/starRating.component';
import { CartComponent } from './product/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    Error404Component,
    CreateComponent,
    ContactusComponent,
    ShowProductComponent,
    ProductDetailsComponent,
    StarRatingComponent,
    CartComponent,
  ],
  imports: [
    StoreModule.forRoot({'products': ProductReducer}),
    EffectsModule.forRoot(
      [ ProductEffects ]
    ),
    StoreDevtoolsModule.instrument({
      name: 'Eshop',
      maxAge: 25,
      logOnly: environment.production,
    }),
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDympPt7CY5DkA6Z7v0WsJHMvsoJYBnYIQ'
    })
  ],
  providers: [
    ProductsService,
    ProductsResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
