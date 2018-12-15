import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromProducts from './product.reducer';

export interface State {
    products: fromProducts.ProductState;
}

//  selector function
const getProductFeatureState = createFeatureSelector<fromProducts.ProductState>('products');

export const getCurrentProductId = createSelector(
    getProductFeatureState,
    state => state.currentProductId
);

export const getProducts = createSelector(
    getProductFeatureState,
    state => state.products
);

export const getError = createSelector(
    getProductFeatureState,
    state => state.error
);

export const getCurrentProduct = createSelector(
    getProductFeatureState,
    getCurrentProductId,
    (state, currentProductId) => {
        if (currentProductId === 0) {
            return {
                category: '',
                description: '',
                imageUrl: '',
                price: 0,
                productCode: '',
                productName: '',
                releaseDate: '',
                starRating: 0,
                _id: null,
            };
        } else {
            return currentProductId ? state.products.find(p => p._id === currentProductId.toString() ) : null;
        }
    }
);
