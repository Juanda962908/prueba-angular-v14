import { createAction } from '@ngrx/store';
import { IProduct } from "../../interfaces/product.interface";

export const getAllProductsLoadAction = createAction('[PRODUCTS / API] Load');
export const getAllProductsSuccessAction = createAction(
  '[PRODUCTS / API] Success',
  (information: IProduct[]) => ({information}));
export const getAllProductsFailAction = createAction(
  '[PRODUCTS / API] Fail',
  (errorMessage: string) => ({errorMessage}));
export const getAllProductsResetAction = createAction('[PRODUCTS / API] Reset',);
