import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { Injectable } from "@angular/core";

import { IGetAllProductsState } from "./store/state/get-all-products.state";
import { getAllProductsLoadAction } from "./store/actions/get-all-products.actions";

@Injectable()
export class AppFacade {
  constructor(private store: Store<{ products: IGetAllProductsState }>) {
  }

 public getProductsState$():Observable<IGetAllProductsState>{
  return this.store.select('products')
 }


 public fetchGetAllProducts():void{
    this.store.dispatch(getAllProductsLoadAction())
 }

}
