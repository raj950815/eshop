import { IProduct } from '../shared/index';
import { ProductActions, ProductActionTypes } from './product.actions';

export interface ProductState {
    currentProductId: number | null;
    products: IProduct[];
    error: string;
}

const initialState: ProductState = {
    currentProductId: null,
    products: [],
    error: ''
};

export function ProductReducer(state = initialState, action: ProductActions) {
    switch (action.type) {
        case ProductActionTypes.SetCurrentProduct:
      return {
        ...state,
        currentProductId: action.payload._id
      };

    case ProductActionTypes.ClearCurrentProduct:
      return {
        ...state,
        currentProductId: null
      };
      case ProductActionTypes.InitializeCurrentProduct:
      return {
        ...state,
        currentProductId: 0
      };
        case ProductActionTypes.LoadSuccess:
        return {
            ...state,
            products: action.payload,
            error: ''
        };

        case ProductActionTypes.LoadFail:
        return {
            ...state,
            products: [],
            error: action.payload
        };

        case ProductActionTypes.LoadSuccessById:
        return {
            ...state,
           // products: state.products.filter(product => product._id !== action.payload),
           products: action.payload, 
           error: ''
          };

        case ProductActionTypes.LoadFailById:
        return {
            ...state,
            products: [],
            error: action.payload
        }

        case ProductActionTypes.UpdateProductSuccess:
        const updatedProducts = state.products.map(
            item => action.payload._id === item._id ? action.payload : item );
        return {
            ...state,
            products: updatedProducts,
            currentProductId: action.payload._id,
            error: ''
        };

        case ProductActionTypes.UpdateProductFail:
        return {
            ...state,
            error: action.payload
        };

        case ProductActionTypes.CreateProductSuccess:
        return {
            ...state,
            products: [...state.products, action.payload],
            currentProductId: action.payload._id,
            error: ''
        };

        case ProductActionTypes.CreateProductFail:
        return {
          ...state,
          error: action.payload
        };

      // After a delete, the currentProduct is null.
      case ProductActionTypes.DeleteProductSuccess:
        return {
          ...state,
          products: state.products.filter(product => product._id !== action.payload),
          currentProductId: null,
          error: ''
        };

      case ProductActionTypes.DeleteProductFail:
        return {
          ...state,
          error: action.payload
        };

        default :
        return state;
    }

}
