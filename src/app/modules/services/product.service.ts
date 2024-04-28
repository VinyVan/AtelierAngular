import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url="http://localhost:3000/products";
  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<Array<Product>>(this.url)
  }
  getById(){
    return this.http.get<Array<Product>>(this.url)
  }
  add(product:Product){
    return this.http.post<Product>(this.url,product)
  } 
}
