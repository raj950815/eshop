import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromProduct from '../state';
import * as productActions from '../state/product.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(private store: Store<fromProduct.State>) { }

  ngOnInit() {
  }

  newProduct(): void {
    this.store.dispatch(new productActions.InitializeCurrentProduct());
  }
}
