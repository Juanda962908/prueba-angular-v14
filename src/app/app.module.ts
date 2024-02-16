import { NgModule } from '@angular/core';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { MatIconModule } from "@angular/material/icon";
import { HttpClientModule } from "@angular/common/http";
import { MatRadioModule } from "@angular/material/radio";
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from "@angular/material/button";
import { MatGridListModule } from "@angular/material/grid-list";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppFacade } from "./app.facade";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GetAllProductsEffects } from "./store/effects/get-all-products.effects";
import { getAllProductsReducer } from "./store/reducers/get-all-products.reducers";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatGridListModule,
    StoreModule.forRoot({products: getAllProductsReducer}),
    EffectsModule.forRoot([GetAllProductsEffects]),
    MatIconModule,
    MatRadioModule,
    MatButtonToggleModule,
    MatButtonModule
  ],
  providers: [
    AppFacade
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
