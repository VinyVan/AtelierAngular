import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './modules/components/header/header.component';
import { FooterComponent } from './modules/components/footer/footer.component';
import { NavComponent } from './modules/components/nav/nav.component';
import { AccueilComponent } from './modules/pages/accueil/accueil.component';

import {MatToolbarModule} from '@angular/material/toolbar'
import{MatButtonModule} from '@angular/material/button'
import{MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card'
import {MatMenuModule} from '@angular/material/menu'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatTableModule} from '@angular/material/table'
import { ContactsComponent } from './modules/pages/contacts/contacts.component';
import { CommonPresentationComponent } from './modules/components/presentations/common-presentation/common-presentation.component';
import { SharedModule } from './modules/shared/shared.module';
import { ProductsModule } from './modules/pages/products/products.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    AccueilComponent,
    ContactsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,  
     SharedModule],
  exports:[
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
