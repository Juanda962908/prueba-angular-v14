import { createReducer, on } from '@ngrx/store';

import {
  getAllProductsFailAction,
  getAllProductsLoadAction, getAllProductsResetAction,
  getAllProductsSuccessAction
} from "../actions/get-all-products.actions";
import { IGetAllProductsState } from "../state/get-all-products.state";

export const initGetAllProductsState: IGetAllProductsState= {
  information: [],
  loading: false,
  completed: false,
  error: false,
  errorMessage: ''
};


export const getAllProductsReducer = createReducer(
  initGetAllProductsState,
  on(getAllProductsLoadAction, state => ({
    ...state,
    loading: true,
    completed: false,
    error: false,
    errorMessage: ''
  })),
  on(getAllProductsSuccessAction, (state, { information }) => ({
    ...state,
    completed: true,
    loading: false,
    error: false,
    information
  })),

  on(getAllProductsFailAction, (state, { errorMessage }) => ({
    ...state,
    loading: false,
    completed: false,
    error: true,
    errorMessage
  })),
  on(getAllProductsResetAction, (state) => initGetAllProductsState)
);
