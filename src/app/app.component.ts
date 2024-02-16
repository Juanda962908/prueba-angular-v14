import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { ChangeDetectorRef, Component, Injector, OnDestroy, OnInit } from '@angular/core';

import { AppFacade } from "./app.facade";
import { environment } from "../environments/environment";
import { IProduct } from "./interfaces/product.interface";
import { newProductsHelper } from "./helpers/products.helpers";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, OnDestroy {
  public form: FormGroup
  protected facade: AppFacade
  private showInput = false;
  private cols = 4
  private copyOfProducts: IProduct[] = []
  private indexProduct = 0

  constructor(
    protected injector: Injector,
    private breakPointObserver: BreakpointObserver,
    private fb: FormBuilder, private cdr: ChangeDetectorRef)
  {
    this.form = this.fb.group({
      newTitle: ['', [Validators.required, Validators.minLength(3)]]
    });
    this.facade = injector.get(AppFacade)
  }
  ngOnInit(): void {
    this.breakPoint()
    this.facade.fetchGetAllProducts()
    this.initCopyOfProducts()
  }
  ngOnDestroy(): void {
    this.breakPoint().unsubscribe()
  }

  get columns(){
    return this.cols
  }

  get indexOfProduct(){
    return this.indexProduct
  }

  get products(){
    return this.copyOfProducts
  }

  get getProducts$(): Observable<IProduct[]> {
    return this.facade.getProductsState$().pipe(map((data) => data.information));
  }

  get showInputField(){
    return this.showInput
  }

  public breakPoint() {
    return this.breakPointObserver.observe([Breakpoints.Handset, Breakpoints.Tablet])
      .subscribe(result => {
        if (result.matches) {
          this.cols = 1;
        } else {
          this.cols = 4;
        }
      });
  }

  public urlImage(image: string) {
    if (image.indexOf('assets/') !== -1) {
      return image
    } else {
      return `${environment.api.base}${environment.api.services.getImages}${image}`
    }
  }

  public toggleInput(index: number) {
    this.showInput = !this.showInput;
    this.indexProduct = index
  }

  public initCopyOfProducts() {
    this.getProducts$.subscribe(data => {
      this.copyOfProducts = data
    })
  }

  public createProduct() {
    const newProduct: IProduct = newProductsHelper()
    this.copyOfProducts = [newProduct, ...this.copyOfProducts];
    this.cdr.detectChanges()
  }

  public updateTitle(id: string, newTitle: string) {
    const updatedProductIndex = this.copyOfProducts.findIndex(product => product._id === id);
    if (updatedProductIndex !== -1) {
      const updatedProduct = {...this.copyOfProducts[updatedProductIndex]};
      updatedProduct.title = newTitle;
      this.copyOfProducts = [
        ...this.copyOfProducts.slice(0, updatedProductIndex),
        updatedProduct,
        ...this.copyOfProducts.slice(updatedProductIndex + 1)
      ];
      this.showInput = false;
      this.form.reset()
    }
  }

  public deleteProduct(id: string) {
    const indexToDelete = this.copyOfProducts.findIndex(product => product._id === id);

    if (indexToDelete !== -1) {
      this.copyOfProducts = [
        ...this.copyOfProducts.slice(0, indexToDelete),
        ...this.copyOfProducts.slice(indexToDelete + 1)
      ];
    }
  }

  public cancelUpdate() {
    this.showInput = false
  }
}
