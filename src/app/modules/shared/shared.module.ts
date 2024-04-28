import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { CommonPresentationComponent } from '../components/presentations/common-presentation/common-presentation.component';
import { HttpClientModule } from '@angular/common/http';


const materials=
[
   MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatCardModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatCardModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
 MatSortModule,
 MatPaginatorModule
]
@NgModule({
  declarations: [CommonPresentationComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    materials,
  ],
  exports:[
    materials,
    HttpClientModule,
    FormsModule,
    CommonPresentationComponent,
  ]
})
export class SharedModule { }
