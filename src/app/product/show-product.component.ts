import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../shared/index';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html'
})
export class ShowProductComponent implements OnInit, OnChanges {
@Input() products: IProduct[];
@Input() filterBy: string;
@Input() sortBy: string;
@Output() selected = new EventEmitter<IProduct>();
visibleProducts: IProduct[] = [];

  constructor() { }
  ngOnInit(): void {  }

  ngOnChanges() {
    if (this.products) {
        this.filterProducts(this.filterBy);
        this.sortBy === 'mintomax' ? this.visibleProducts.sort(sortByPriceAsc) : this.visibleProducts.sort(sortByPriceDecs);
    }
  }

  productSelected(product: IProduct): void {
    this.selected.emit(product);
  }

  filterProducts(filter) {
    if (filter === 'all') {
        this.visibleProducts = this.products.slice(0);
    } else {
      this.visibleProducts = this.products.filter(product => {
        return product.category.toLocaleLowerCase() === filter;
      });
    }
  }

}

function sortByProductNameAsc(p1: IProduct, p2: IProduct) {
  if (p1.productName > p2.productName) {
    return 1;
  } else if ( p1.productName === p2.productName) {
    return 0;
  } else {
    return -1;
  }
}

function sortByPriceAsc(p1: IProduct, p2: IProduct) {
  return p1.price - p2.price;
}

function sortByPriceDecs(p1: IProduct, p2: IProduct) {
  return p2.price - p1.price;
}
