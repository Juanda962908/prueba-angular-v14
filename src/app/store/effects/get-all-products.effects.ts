import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, take } from 'rxjs/operators';

import * as actions from '../actions/get-all-products.actions'
import { IProduct } from "../../interfaces/product.interface";
import { GetAllProductsService } from "../../services/get-all-products.service";

@Injectable()
export class GetAllProductsEffects {

  constructor(
    private actions$: Actions,
    private getAllProductsService: GetAllProductsService
  ) {}

GetAllProducts:Observable<Action> = createEffect(() =>
      this.actions$.pipe(
        ofType(actions.getAllProductsLoadAction),

        switchMap((action) => {
          return this.getAllProductsService.getAllProducts().pipe(
            take(1),
            map((information: IProduct[]) => {
              if (information) {
                return actions.getAllProductsSuccessAction(information);
              }
              return actions.getAllProductsFailAction('No se obtienen productos');
            }),
            catchError((_) => of(actions.getAllProductsFailAction('')))
          );
        })
      ),
  );
}
