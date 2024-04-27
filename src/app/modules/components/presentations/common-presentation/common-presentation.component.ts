import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-common-presentation',
  templateUrl: './common-presentation.component.html',
  styleUrls: ['./common-presentation.component.scss']
})
export class CommonPresentationComponent {

  @Input({required:true}) 
    title!:string
}
