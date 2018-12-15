import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromProduct from '../state';
import * as productActions from '../state/product.actions';
import { IProduct, ProductsService } from '../shared/index';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent implements OnInit {

  products: any;
  constructor(private router: Router,
    private productService: ProductsService,
    private route: ActivatedRoute,
    private store: Store<fromProduct.State>) { }

  ngOnInit() {
    const id: any = this.route.snapshot.params['id'];
    this.store.dispatch(new productActions.LoadById(id));
    this.store.pipe(select(fromProduct.getProducts))
    .subscribe(res => {
      console.log('getbyid data ', res);
      this.products = res;
    });

    // this.store.pipe(select(fromProduct.getCurrentProduct))
    // .subscribe(res => {
    //   this.products = res;
    // });
    }

    addToCart(product: IProduct) {
      if (this.productService.user) {
        this.addToCartApi(product);
      } else {
        this.addToCartLocal(product);
      }
    }

    addToCartApi(product: IProduct) {
      console.log('user add ', product);
    }

    addToCartLocal(product: any) {
      const itemsArray = localStorage.getItem('eshopCart') ? JSON.parse(localStorage.getItem('eshopCart')) : [];
      const item = itemsArray.find(i => i._id === product._id);
      if (item === undefined) {
        if (product.​quantity >= 5) {
          product.​quantity = 5;
        } else if (product.​quantity <= 0) {
          product.​quantity = 1;
        }
        itemsArray.push(product);
        localStorage.setItem('eshopCart', JSON.stringify(itemsArray));
        this.router.navigate(['/cart']);
     } else {
      product.​quantity = parseInt(product.​quantity) + parseInt(item.​quantity)
      if (product.​quantity >= 5) {
        product.​quantity = 5;
      } else if (product.​quantity <= 0) {
        product.​quantity = 1;
      }
        let index = itemsArray.indexOf(item);
        itemsArray.splice(index, 1);
        itemsArray.push(product);
        localStorage.setItem('eshopCart', JSON.stringify(itemsArray));
        this.router.navigate(['/cart']);
     }
    }

}
