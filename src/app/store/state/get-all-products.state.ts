import { IProduct } from "../../interfaces/product.interface";

export interface IGetAllProductsState {
  information: IProduct[];
  loading: boolean;
  completed: boolean;
  error: boolean;
  errorMessage: string;
}


