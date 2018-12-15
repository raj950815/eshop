import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../shared/product.model';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromProduct from '../state';
import * as productActions from '../state/product.actions';

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  products$: Observable<IProduct[]>;
  errorMessage$: Observable<string>;

  public categories: any[];
  filterBy = 'all';
  sortBy = 'mintomax';
  products: IProduct[];
  constructor(private route: ActivatedRoute, private store: Store<fromProduct.State>) {   }

  ngOnInit() {
    this.store.dispatch(new productActions.Load());
    this.products$ = this.store.pipe(select(fromProduct.getProducts));
    this.errorMessage$ = this.store.pipe(select(fromProduct.getError));
    this.products = this.route.snapshot.data['products'];
    this.categories = this.products.map(item => item.category)
    .filter((value, index, self) => self.indexOf(value) === index);
   }

   productSelected(product: IProduct): void {
    this.store.dispatch(new productActions.SetCurrentProduct(product));
   }

}
