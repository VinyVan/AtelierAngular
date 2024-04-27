import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort,MatSortModule } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements AfterViewInit{

  myData=new MatTableDataSource([
    {"nom":"Kone" , "prenom":"Modibo"},
    {"nom":"Sylla" , "prenom":"Ousmane"},
    {"nom":"Diarra" , "prenom":"Oumar"},
    {"nom":"Traoré" , "prenom":"Karim"},
  ])

  displayedColumns=["nom","prenom"]

  constructor(private _liveAnnouncer:LiveAnnouncer){}

  @ViewChild(MatSort)
  sort!: MatSort;
  
  applyFilter(filterField:Event){
    this.myData.filter=(filterField.target as HTMLInputElement).value.trim().toLowerCase();
  }

  displayRow(row:any){
    console.log(row);
  }

  ngAfterViewInit(): void {
    this.myData.sort=this.sort;
  }

  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
