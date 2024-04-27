import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './modules/pages/accueil/accueil.component';
import { ProductsComponent } from './modules/pages/products/products.component';
import { ContactsComponent } from './modules/pages/contacts/contacts.component';
import { ProductAddComponent } from './modules/pages/products/product-add/product-add.component';
import { ProductsListComponent } from './modules/pages/products/products-list/products-list.component';

const routes: Routes = [
  {path:"home",component:AccueilComponent},
  {path:"products/add",component:ProductAddComponent},
  {path:"products/list",component:ProductsListComponent},
  {path:"contacts",component:ContactsComponent},
  {path:"products",component:ProductsComponent},
  {path:"" , redirectTo: "home" , pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
