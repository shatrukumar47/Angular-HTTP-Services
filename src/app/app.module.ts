import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { CardProductComponent } from './card-product/card-product.component';
import { ProductDetailsPageComponent } from './product-details-page/product-details-page.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';

const appRoutes: Routes = [
  {path: "", component: ProductPageComponent},
  {path: "product/:id", component: ProductDetailsPageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    CardProductComponent,
    ProductDetailsPageComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
