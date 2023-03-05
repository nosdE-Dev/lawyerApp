import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AllProducts } from '../interfaces/allproducts.interface';
import { ProductModel } from '../models/product-model';
import { AddProduct } from '../interfaces/addproduct-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  productsUrl:string = environment.urls.products;
  baseUrl:string = environment.urls.urlBase;
  headers = {headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token') })};

  private _products: AllProducts | undefined;
  get products(): AllProducts {
    return { ...this._products! }
  }

  private _savedProduct: AddProduct | undefined;
  get saveProducts(): AddProduct {
    return { ...this._savedProduct! }
  }

  getAllProducts() {
    return this.http.get<AllProducts>(this.baseUrl+this.productsUrl+'page=1&size=10',this.headers)
    .pipe(
      tap( response => this._products = response ),
    );
  }

  saveProduct(data: ProductModel) {
    return this.http.post<AddProduct>(this.baseUrl+'/products',data,this.headers)
    .pipe(
      tap( response => this._savedProduct = response ),
    );
  }

  updateProduct(data: ProductModel,id:string){
    return this.http.put<AddProduct>(this.baseUrl+'/products/'+id,data,this.headers)
    
  }



}
