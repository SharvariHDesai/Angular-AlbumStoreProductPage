import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Album} from './album';
import {Product} from './product';
import {Observable} from 'rxjs/Observable'
@Injectable()
export class ProductService {
private _albumUrl='../assets/album.json';
private _producturl = "../assets/products.json";
  constructor(private _http :Http) { }
public getAlbum(id:number):Observable<Album>
{
  return this._http.get(this._albumUrl).map((response)=><Album>response.json());
}
public getProducts():Observable<Product[]>{
  return this._http.get(this._producturl).map((response)=><Product[]>response.json());
}
}
