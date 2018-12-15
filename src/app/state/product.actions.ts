/* NgRx */
import { Action } from '@ngrx/store';
import { IProduct } from '../shared/index';

export enum ProductActionTypes {
    SetCurrentProduct = '[IProduct] Set Current Product',
    ClearCurrentProduct = '[IProduct] Clear Current Product',
    InitializeCurrentProduct = '[IProduct] Initialize Current Product',
    Load = '[IProduct] Load',
    LoadSuccess = '[IProduct] Load Success',
    LoadFail = '[IProduct] Load Fail',
    LoadById = '[IProduct] LoadById',
    LoadSuccessById = '[IProduct] LoadById Success',
    LoadFailById = '[IProduct] LoadById Fail',
    UpdateProduct = '[IProduct] Update Product',
    UpdateProductSuccess = '[IProduct] Update Product Success',
    UpdateProductFail = '[IProduct] Update Product Fail',
    CreateProduct = '[IProduct] Create Product',
    CreateProductSuccess = '[IProduct] Create Product Success',
    CreateProductFail = '[IProduct] Create Product Fail',
    DeleteProduct = '[IProduct] Delete Product',
    DeleteProductSuccess = '[IProduct] Delete Product Success',
    DeleteProductFail = '[IProduct] Delete Product Fail'
}

export class SetCurrentProduct implements Action {
    readonly type = ProductActionTypes.SetCurrentProduct;
    constructor(public payload: IProduct) { }
  }

  export class ClearCurrentProduct implements Action {
    readonly type = ProductActionTypes.ClearCurrentProduct;
  }

  export class InitializeCurrentProduct implements Action {
    readonly type = ProductActionTypes.InitializeCurrentProduct;
  }

export class Load implements Action {
    readonly type = ProductActionTypes.Load;
}

export class LoadSuccess implements Action {
    readonly type = ProductActionTypes.LoadSuccess;
    constructor(public payload: IProduct[]) {}
}

export class LoadFail implements Action {
    readonly type = ProductActionTypes.LoadFail;
    constructor(public payload: string) {}
}

export class LoadById implements Action {
  readonly type = ProductActionTypes.LoadById;
  constructor(public payload: string) { }
}

export class LoadSuccessById implements Action {
  readonly type = ProductActionTypes.LoadSuccessById;
  constructor(public payload: IProduct[]) { }
}

export class LoadFailById implements Action {
  readonly type = ProductActionTypes.LoadFailById;
  constructor(public payload: string) { }
}

export class UpdateProduct implements Action {
    readonly type = ProductActionTypes.UpdateProduct;
    constructor(public payload: IProduct) { }
  }

  export class UpdateProductSuccess implements Action {
    readonly type = ProductActionTypes.UpdateProductSuccess;
    constructor(public payload: IProduct) { }
  }

  export class UpdateProductFail implements Action {
    readonly type = ProductActionTypes.UpdateProductFail;
    constructor(public payload: string) { }
  }

  export class CreateProduct implements Action {
    readonly type = ProductActionTypes.CreateProduct;
    constructor(public payload: IProduct) { }
  }

  export class CreateProductSuccess implements Action {
    readonly type = ProductActionTypes.CreateProductSuccess;
    constructor(public payload: IProduct) { }
  }

  export class CreateProductFail implements Action {
    readonly type = ProductActionTypes.CreateProductFail;
    constructor(public payload: string) { }
  }

  export class DeleteProduct implements Action {
    readonly type = ProductActionTypes.DeleteProduct;
    constructor(public payload: string) { }
  }

  export class DeleteProductSuccess implements Action {
    readonly type = ProductActionTypes.DeleteProductSuccess;
    constructor(public payload: string) { }
  }

  export class DeleteProductFail implements Action {
    readonly type = ProductActionTypes.DeleteProductFail;
    constructor(public payload: string) { }
  }

export type ProductActions = SetCurrentProduct
| ClearCurrentProduct
| InitializeCurrentProduct
| Load
| LoadSuccess
| LoadFail
| LoadById
| LoadSuccessById
| LoadFailById
| UpdateProduct
| UpdateProductSuccess
| UpdateProductFail
| CreateProduct
| CreateProductSuccess
| CreateProductFail
| DeleteProduct
| DeleteProductSuccess
| DeleteProductFail;
