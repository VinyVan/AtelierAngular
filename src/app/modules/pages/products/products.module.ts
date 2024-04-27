import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductsComponent } from './products.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { AppModule } from 'src/app/app.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductAddComponent,
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
})
export class ProductsModule { }
