import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { appConfig } from '../app.config';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { IProduct } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
user = false;
  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(appConfig.apiUrl + '/products')
    .pipe(
      tap(data => console.log('products: ', JSON.stringify(data))),
      catchError(this.handleError)
     // catchError(this.handlerError<IProduct[]>('getProducts', []))
    );
  }

  getProductsById(id: string): Observable<IProduct> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${appConfig.apiUrl}/products/${id}`;
    return this.http.get<IProduct>(url, { headers: headers })
      .pipe(
        tap(data => console.log('get ProductById: ' + data)),
        catchError(this.handleError)
      );
  }

  createProduct(product: IProduct) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    product._id = null;
    return this.http.post<IProduct>(appConfig.apiUrl + '/products/create', product, { headers: headers })
      .pipe(
        tap(data => console.log('createProduct: ' + JSON.stringify(data))),
        catchError(this.handleError)
       // catchError(this.handlerError<IProduct[]>('createProduct', []))
      );
  }

  deleteProduct(id: string): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${appConfig.apiUrl}/products/${id}`;
    return this.http.delete<IProduct>(url, { headers: headers })
      .pipe(
        tap(data => console.log('deleteProduct: ' + id)),
        catchError(this.handleError)
      );
  }

  updateProduct(product: IProduct): Observable<IProduct> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${appConfig.apiUrl}/products/${product._id}`;
    return this.http.put<IProduct>(url, product, { headers: headers })
      .pipe(
        tap(() => console.log('updateProduct: ' + product._id)),
        // Return the product on an update
        map(() => product),
        catchError(this.handleError)
      );
  }

  private handlerError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log('error ', error);
      return of(result as T);
    };
  }

  create(product: any) {
    return this.http.post(appConfig.apiUrl + '/products/create', product);
  }

  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error('error ', err);
    return throwError(errorMessage);
  }

}
