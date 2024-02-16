import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { IProduct } from "../interfaces/product.interface";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GetAllProductsService {
  private readonly baseUrl: string = environment.api.base
  private readonly url: string = environment.api.services.getAllProducts

  constructor(private http: HttpClient) {
  }

  public getAllProducts(): Observable<IProduct[]> {

    const products = this.http.get<IProduct[]>(this.baseUrl + `${this.url}`)
    return products
  }

}
