import { Component, OnInit } from '@angular/core';
import { ProductsService, IProduct } from '../shared';
import { Store, select } from '@ngrx/store';
import * as fromProduct from '../state';
import * as productActions from '../state/product.actions';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './create.component.html'
})
export class CreateComponent implements OnInit {
  public selectedProduct: any;
  productForm: FormGroup;
  constructor(private fb: FormBuilder,
              private productService: ProductsService,
              private store: Store<fromProduct.State>) { }

  ngOnInit() {
    this.store.dispatch(new productActions.Load());
    this.store.pipe(select(fromProduct.getCurrentProduct))
    .subscribe( data => { this.selectedProduct = data;
    });
    this.productForm = this.fb.group({
      productName: this.selectedProduct.productName,
      productCode: this.selectedProduct.productCode,
      category: this.selectedProduct.category,
      releaseDate: this.selectedProduct.releaseDate,
      price: this.selectedProduct.price,
      description: this.selectedProduct.description,
      starRating: this.selectedProduct.starRating,
      imageUrl: this.selectedProduct.imageUrl
    });
  }
  saveProduct() {
   const p = {...this.selectedProduct, ...this.productForm.value };
   if (p._id === null ) {
    this.create(p);
   } else {
     this.update(p);
   }
  // this.productService.create(form).subscribe(data => console.log(data));
  }
  create(p) {
    this.store.dispatch(new productActions.CreateProduct(p));
  }
  update(p) {
    this.store.dispatch(new productActions.UpdateProduct(p));
  }

  deleteProduct() {
   if (this.selectedProduct && this.selectedProduct._id) {
     if (confirm(`Really delete the product: ${this.selectedProduct.productName}?`)) {
       this.store.dispatch(new productActions.DeleteProduct(this.selectedProduct._id));
     }
   }
  }

}
