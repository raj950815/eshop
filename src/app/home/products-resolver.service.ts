import { Resolve } from '@angular/router';
import { ProductsService } from '../shared/index';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductsResolver implements Resolve<any> {
    constructor(private productService: ProductsService) {}

    resolve() {
        return this.productService.getProducts();
    }
}
